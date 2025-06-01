function processProducts(products) {
  // Extract product names using map
  const productNames = products.map(product => product.name);

  // Log message based on the product price using forEach
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  return productNames;
}

// Example usage
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);

// Output:
// Laptop is above $50
// Mouse is below $50
