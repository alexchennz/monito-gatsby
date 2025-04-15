import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { GatsbyImage } from 'gatsby-plugin-image';

const CustomerCarousel = ({ customers }) => {
  

  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto' })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  if (!customers || customers.length === 0) {
    return null;
  }

  // console.log("Customer data:", customers);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {customers.map((customer, index) => (
            <div className="embla__slide" key={index}>
              {customer ? (
                <GatsbyImage
                  image={customer}
                  alt={`Customer ${index + 1}`}
                  className="w-full h-full object-cover"
                  objectFit="cover"
                  objectPosition="center"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image unavailable</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerCarousel
