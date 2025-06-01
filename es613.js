const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = parseFloat(item.price);

    if (isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    this.items.push({ ...item, price }); // store item with valid numeric price
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // String price, will be parsed
checkout.addItem({ name: "Milk", price: 3.50 });             // Valid number
checkout.addItem({ name: "Invalid", price: "abc" });         // Invalid, won't be added

console.log(checkout.getTotal()); 
