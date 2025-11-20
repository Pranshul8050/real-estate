const mongoose = require("mongoose");
require("dotenv").config();

// Import models
const SalePropertyDetail = require("./models/SalePropertyDetail.models");
const RentPropertyDetail = require("./models/RentPropertyDetail.models");

const DB_uri = process.env.ATLAS_URI;

mongoose.connect(DB_uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
  seedProperties();
});

async function seedProperties() {
  try {
    // Clear existing properties
    await SalePropertyDetail.deleteMany({});
    await RentPropertyDetail.deleteMany({});

    console.log("Existing properties cleared...");

    // Sample Properties for Sale
    const saleProperties = [
      {
        PropertyTitle: "Luxury 3BHK Apartment in Bangalore",
        PropertyTagline: "Modern Living with Premium Amenities",
        Address: "Whitefield, Bangalore",
        City: "Bangalore",
        Price: 12500000,
        DatePosted: new Date(),
        Description: "Spacious 3BHK apartment with world-class amenities in the heart of Bangalore's IT hub. Features include modular kitchen, marble flooring, and 24/7 security.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943312!2d77.49085248688458!3d12.953945614532126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        Images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"],
        Bedrooms: 3,
        Livingrooms: 1,
        TypeOfProperty: "Apartment",
        Bathrooms: 3,
        TotalRooms: 7,
        YearBuilt: new Date("2022-01-01"),
        Kitchens: 1,
        AreaSqFt: 1650,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForSale",
        Amenities: ["Gym", "Swimming Pool", "Parking", "Power Backup", "Security"],
        Places: ["Metro Station", "Shopping Mall", "School", "Hospital"],
        PopularTags: ["Luxury", "Ready to Move", "Gated Community"]
      },
      {
        PropertyTitle: "Premium Villa in Gurgaon",
        PropertyTagline: "Elegant Living Space",
        Address: "DLF Phase 4, Gurgaon",
        City: "Gurgaon",
        Price: 35000000,
        DatePosted: new Date(),
        Description: "Beautiful 4BHK villa with private garden and parking. Located in prime location with excellent connectivity to Delhi and major corporate hubs.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192846!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sGurugram!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
        Images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"],
        Bedrooms: 4,
        Livingrooms: 2,
        TypeOfProperty: "Villa",
        Bathrooms: 4,
        TotalRooms: 10,
        YearBuilt: new Date("2021-01-01"),
        Kitchens: 1,
        AreaSqFt: 3200,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForSale",
        Amenities: ["Private Garden", "Parking", "Modular Kitchen", "Power Backup"],
        Places: ["Golf Course", "International School", "Metro", "Mall"],
        PopularTags: ["Villa", "Luxury", "Independent House"]
      },
      {
        PropertyTitle: "Sea View Apartment in Mumbai",
        PropertyTagline: "Wake up to Ocean Views",
        Address: "Marine Drive, Mumbai",
        City: "Mumbai",
        Price: 28000000,
        DatePosted: new Date(),
        Description: "Stunning 3BHK apartment with breathtaking sea views. Premium location in South Mumbai with easy access to business districts.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292840395!2d72.71637347446013!3d19.082177512587864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        Images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800", "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"],
        Bedrooms: 3,
        Livingrooms: 1,
        TypeOfProperty: "Apartment",
        Bathrooms: 3,
        TotalRooms: 8,
        YearBuilt: new Date("2020-01-01"),
        Kitchens: 1,
        AreaSqFt: 2100,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForSale",
        Amenities: ["Sea View", "Club House", "Gym", "Parking", "24x7 Security"],
        Places: ["Beach", "Railway Station", "Airport", "Shopping Complex"],
        PopularTags: ["Sea View", "Premium", "South Mumbai"]
      }
    ];

    await SalePropertyDetail.insertMany(saleProperties);
    console.log("Sale properties seeded successfully!");

    // Sample Properties for Rent
    const rentProperties = [
      {
        PropertyTitle: "Cozy 2BHK Apartment in Pune",
        PropertyTagline: "Perfect for Small Families",
        Address: "Koregaon Park, Pune",
        City: "Pune",
        Price: 35000,
        DatePosted: new Date(),
        Description: "Well-maintained 2BHK apartment in prime Pune location. Close to IT parks, restaurants, and shopping areas.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14408607824!2d73.69815!3d18.52043095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        Images: ["https://images.unsplash.com/photo-1502672260066-6bc35f0a1832?w=800", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
        Bedrooms: 2,
        Livingrooms: 1,
        TypeOfProperty: "Apartment",
        Bathrooms: 2,
        TotalRooms: 5,
        YearBuilt: new Date("2019-01-01"),
        Kitchens: 1,
        AreaSqFt: 1100,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForRent",
        Amenities: ["Furnished", "WiFi", "Parking", "Power Backup"],
        Places: ["IT Park", "Mall", "Restaurant", "Gym"],
        PopularTags: ["Furnished", "Ready to Move", "Prime Location"]
      },
      {
        PropertyTitle: "Spacious 3BHK in Hyderabad",
        PropertyTagline: "Modern Apartment with Great Amenities",
        Address: "Hitech City, Hyderabad",
        City: "Hyderabad",
        Price: 45000,
        DatePosted: new Date(),
        Description: "Luxurious 3BHK apartment in Hyderabad's tech hub. Perfect for professionals with gym, pool, and clubhouse facilities.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160381797!2d78.24323019999999!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
        Images: ["https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800", "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800"],
        Bedrooms: 3,
        Livingrooms: 1,
        TypeOfProperty: "Apartment",
        Bathrooms: 3,
        TotalRooms: 7,
        YearBuilt: new Date("2021-01-01"),
        Kitchens: 1,
        AreaSqFt: 1500,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForRent",
        Amenities: ["Semi-Furnished", "Gym", "Swimming Pool", "Parking", "Security"],
        Places: ["Metro", "Tech Park", "Shopping Mall", "Hospital"],
        PopularTags: ["Spacious", "Hitech City", "Premium"]
      },
      {
        PropertyTitle: "Affordable 1BHK in Delhi",
        PropertyTagline: "Budget-Friendly Living",
        Address: "Laxmi Nagar, Delhi",
        City: "Delhi",
        Price: 18000,
        DatePosted: new Date(),
        Description: "Compact and comfortable 1BHK apartment ideal for bachelors or couples. Well-connected to metro and markets.",
        PropertyMapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89793867242!2d77.06889653689524!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890",
        MainImage: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
        Images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800", "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800"],
        Bedrooms: 1,
        Livingrooms: 1,
        TypeOfProperty: "Apartment",
        Bathrooms: 1,
        TotalRooms: 3,
        YearBuilt: new Date("2018-01-01"),
        Kitchens: 1,
        AreaSqFt: 600,
        Owner: "Pranshul Real Estate",
        PropertyCategory: "ForRent",
        Amenities: ["Semi-Furnished", "Parking", "Water Supply"],
        Places: ["Metro Station", "Market", "Bank", "Hospital"],
        PopularTags: ["Affordable", "Metro Nearby", "Bachelor Friendly"]
      }
    ];

    await RentPropertyDetail.insertMany(rentProperties);
    console.log("Rent properties seeded successfully!");

    console.log("\n✅ All properties seeded successfully!");
    console.log("Total Sale Properties:", saleProperties.length);
    console.log("Total Rent Properties:", rentProperties.length);
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding properties:", error);
    process.exit(1);
  }
}
