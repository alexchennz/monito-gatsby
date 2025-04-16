import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPaw, FaHeart, FaShieldAlt, FaHandshake } from "react-icons/fa";

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "Sarah founded Monito in 2018 with a vision to create a pet marketplace that prioritizes animal welfare and responsible pet ownership."
    },
    {
      name: "Michael Chen",
      position: "Head Veterinarian",
      bio: "With over 15 years of experience in animal care, Michael ensures all our pets receive top-quality healthcare and proper nutrition."
    },
    {
      name: "Emma Rodriguez",
      position: "Animal Behaviorist",
      bio: "Emma specializes in animal behavior and helps match pets with the right families based on lifestyle and personality compatibility."
    },
    {
      name: "David Wilson",
      position: "Operations Manager",
      bio: "David oversees our day-to-day operations, ensuring that both pets and customers receive exceptional care and service."
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-mon-yellow-40 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-clamp-h2 font-bold text-dark-blue-80 mb-4">About Monito</h1>
          <p className="text-neutral-60 max-w-2xl">
            We're dedicated to connecting loving families with their perfect pet companions through responsible practices and exceptional care.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-4">Our Story</h2>
            <div className="space-y-4 text-neutral-60">
              <p>
                Monito was founded in 2018 by Sarah Johnson, a lifelong animal lover with a background in veterinary science. 
                After witnessing the challenges in the pet adoption industry, Sarah set out to create a marketplace that would 
                prioritize animal welfare while making the process of finding the perfect pet companion more transparent and enjoyable.
              </p>
              <p>
                What started as a small operation with just a handful of trusted breeders has grown into New Zealand's 
                premier pet marketplace, connecting thousands of pets with loving families each year. Despite our growth, 
                we've maintained our core values of animal welfare, transparency, and exceptional customer service.
              </p>
              <p>
                Today, Monito works with over 100 responsible breeders across the country, each carefully vetted to ensure 
                they meet our strict standards for animal care and ethical breeding practices. We've also expanded our services 
                to include comprehensive support for new pet parents, from nutritional guidance to behavioral training resources.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <StaticImage
              src="../images/product-image.png"
              alt="Monito team with pets"
              className="w-full h-full object-cover"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="bg-mon-yellow-40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-dark-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaPaw className="text-2xl" />
              </div>
              <h3 className="font-bold text-dark-blue-80 text-xl mb-3">Animal Welfare</h3>
              <p className="text-neutral-60">
                We prioritize the health, happiness, and well-being of every animal in our care above all else.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-dark-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="font-bold text-dark-blue-80 text-xl mb-3">Perfect Matches</h3>
              <p className="text-neutral-60">
                We're dedicated to creating perfect matches between pets and families for lifelong companionship.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-dark-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="font-bold text-dark-blue-80 text-xl mb-3">Transparency</h3>
              <p className="text-neutral-60">
                We believe in complete transparency about our breeding practices, pet health, and business operations.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-dark-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="font-bold text-dark-blue-80 text-xl mb-3">Ongoing Support</h3>
              <p className="text-neutral-60">
                We provide continuous support and resources to help pet parents provide the best care for their companions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-12 text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-24 h-24 bg-mon-yellow-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-dark-blue font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="font-bold text-dark-blue-80 text-xl mb-1 text-center">{member.name}</h3>
              <p className="text-neutral-60 text-sm mb-3 text-center">{member.position}</p>
              <p className="text-neutral-60 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-dark-blue py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">5+</h3>
              <p className="text-mon-yellow-40">Years in Business</p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-mon-yellow-40">Happy Pets Placed</p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">100+</h3>
              <p className="text-mon-yellow-40">Trusted Breeders</p>
            </div>
            <div>
              <h3 className="text-white text-4xl font-bold mb-2">98%</h3>
              <p className="text-mon-yellow-40">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-4">Ready to Find Your Perfect Pet?</h2>
        <p className="text-neutral-60 max-w-2xl mx-auto mb-8">
          Browse our selection of lovingly raised pets and find your new best friend today.
        </p>
        <Link 
          to="/" 
          className="bg-dark-blue text-white py-3 px-8 rounded-full hover:bg-dark-blue-60 transition-colors inline-block"
        >
          Explore Pets
        </Link>
      </div>
      
      <Footer />
    </main>
  );
};

export default AboutPage;

export const Head = () => <title>About Us | Monito</title>;
