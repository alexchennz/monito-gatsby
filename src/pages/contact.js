import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-mon-yellow-40 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-clamp-h2 font-bold text-dark-blue-80 mb-4">Contact Us</h1>
          <p className="text-neutral-60 max-w-2xl">
            Have questions about our pets or services? We're here to help! Reach out to our friendly team using any of the methods below.
          </p>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Us Information */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-6">About Monito</h2>
            <div className="space-y-6 text-neutral-60">
              <p>
                Monito is a premium pet store dedicated to connecting loving families with their perfect pet companions. 
                Founded in 2018, we have helped thousands of pets find their forever homes.
              </p>
              
              <p>
                Our mission is to ensure the health and happiness of every pet that passes through our doors. 
                All our animals receive top-quality care, proper nutrition, and regular veterinary check-ups.
              </p>
              
              <p>
                We work with responsible breeders who prioritize animal welfare and genetic health. 
                Every pet from Monito comes with complete health documentation and ongoing support for new pet parents.
              </p>
              
              <p>
                Our team consists of passionate animal lovers with extensive experience in animal care and behavior. 
                We're always available to answer your questions and provide guidance on pet selection and care.
              </p>
              
              <div className="pt-4">
                <h3 className="font-bold text-neutral mb-2">Our Values:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Animal welfare above all else</li>
                  <li>Transparency in our breeding and sourcing practices</li>
                  <li>Education and support for pet owners</li>
                  <li>Community engagement and responsible pet ownership</li>
                  <li>Lifetime commitment to the animals we place</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-mon-yellow-40 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-dark-blue text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral mb-1">Our Location</h3>
                  <p className="text-neutral-60">
                    123 Pet Street, Monito City<br />
                    New Zealand 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mon-yellow-40 p-3 rounded-full mr-4">
                  <FaPhone className="text-dark-blue text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral mb-1">Phone Number</h3>
                  <p className="text-neutral-60">
                    +64 123 456 7890<br />
                    +64 098 765 4321
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mon-yellow-40 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-dark-blue text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral mb-1">Email Address</h3>
                  <p className="text-neutral-60">
                    info@monito.com<br />
                    support@monito.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mon-yellow-40 p-3 rounded-full mr-4">
                  <FaClock className="text-dark-blue text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral mb-1">Working Hours</h3>
                  <p className="text-neutral-60">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 mt-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.911527006167!2d174.7764813!3d-36.8506652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1650000000000!5m2!1sen!2snz" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Monito Location"
        ></iframe>
      </div>
      
      <Footer />
    </main>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Us | Monito</title>;
