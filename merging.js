// Step 1: Define the profile and updates objects
const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101"
  }
};

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA"
  }
};

// Step 2: Merge the objects using spread operator
const mergedProfile = {
  ...profile, // Spread the original profile object
  ...updates
  }


// Step 3: Return the new merged object
console.log(mergedProfile);