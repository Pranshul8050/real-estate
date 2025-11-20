const mongoose = require("mongoose");
require("dotenv").config();

// Import models
const ContactUs = require("./models/ContactUs.models");
const AboutUs = require("./models/AboutUs.models");
const Team = require("./models/Team.models");

const DB_uri = process.env.ATLAS_URI;

mongoose.connect(DB_uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  seedData();
});

async function seedData() {
  try {
    // Clear existing data
    await ContactUs.deleteMany({});
    await AboutUs.deleteMany({});
    await Team.deleteMany({});

    console.log("Existing data cleared...");

    // Seed Contact Us Information
    const contactUs = new ContactUs({
      description: "Welcome to Pranshul Real Estate - Your trusted partner in finding the perfect property across India. We specialize in residential and commercial properties with personalized service and expert guidance.",
      location: "MG Road, Bangalore, Karnataka 560001, India",
      phoneNumber1: "+91 98765 43210",
      phoneNumber2: "+91 98765 43211",
      phoneNumber3: "+91 98765 43212",
      
      days1: "Monday - Friday",
      days2: "Saturday",
      days3: "Sunday",
      
      timings1: "9:00 AM - 7:00 PM",
      timings2: "10:00 AM - 5:00 PM",
      timings3: "Closed",
      
      facebook: "https://facebook.com/pranshulrealestate",
      twitter: "https://twitter.com/pranshulrealestate",
      instagram: "https://instagram.com/pranshulrealestate",
      skype: "pranshul.realestate",
      email: "pranshulgera0508@gmail.com",
      
      locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8497198229846!2d77.59369931482221!3d12.972442090866907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    });

    await contactUs.save();
    console.log("Contact Us data seeded successfully!");

    // Seed About Us Information
    const aboutUs = new AboutUs({
      title1: "Leading Real Estate Company in India - Your Trusted Partner for Premium Properties",
      title2: "Your Dream Property Awaits in Prime Indian Locations",
      description: "Pranshul Real Estate has been serving clients across India for years, offering premium properties in major cities. We provide comprehensive real estate solutions including buying, selling, and renting of residential and commercial properties. Our experienced team ensures smooth transactions and customer satisfaction.",
      
      list1: "Expert Property Consultants",
      list2: "Wide Range of Properties",
      list3: "Legal Assistance",
      list4: "Home Loan Support",
      list5: "Property Verification",
      list6: "Best Market Prices",
      list7: "Post-Sales Support",
      
      SellProperty: "Looking to sell your property? We help you find the right buyers at the best price with complete legal support and documentation.",
      DailyApartment: "Find your perfect rental apartment in prime locations across Indian cities with verified listings and transparent pricing.",
      FamilyHouse: "Discover spacious family homes in safe neighborhoods with modern amenities and excellent connectivity.",
      
      testimonial: "What Our Clients Say About Working With Us",
      ClientSay: "Customer satisfaction is our top priority and we strive to exceed expectations",
      line1: "We have helped thousands of families find their dream homes across India with personalized service",
      say1: "Excellent service! Pranshul Real Estate helped us find our perfect home in Bangalore. The team was professional and supportive throughout the process.",
      say2: "Best real estate experience ever! They understood our requirements and showed us only relevant properties. Highly recommended for anyone looking to buy property in India.",
      
      ClientName1: "Rajesh Kumar",
      ClientName2: "Priya Sharma",
      ClientPosition1: "Software Engineer, Bangalore",
      ClientPosition2: "Business Owner, Delhi"
    });

    await aboutUs.save();
    console.log("About Us data seeded successfully!");

    // Seed Team Members
    const teamMembers = [
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
        name: "Pranshul Gera",
        role: "Founder & CEO",
        facebook: "https://facebook.com/pranshul",
        twitter: "https://twitter.com/pranshul",
        instagram: "https://instagram.com/pranshul",
        linkedIn: "https://linkedin.com/in/pranshul"
      },
      {
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
        name: "Ananya Verma",
        role: "Senior Property Consultant",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
      },
      {
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
        name: "Arjun Mehta",
        role: "Sales Manager",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
      },
      {
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
        name: "Neha Kapoor",
        role: "Marketing Head",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedIn: "https://linkedin.com"
      }
    ];

    await Team.insertMany(teamMembers);
    console.log("Team data seeded successfully!");

    console.log("\n✅ All data seeded successfully!");
    console.log("You can now access your personalized website!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}
