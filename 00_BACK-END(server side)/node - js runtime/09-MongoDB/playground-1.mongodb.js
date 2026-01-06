

// Select the database to use.
use('db-2');

// Insert a few documents into the sales collection.
db.getCollection('products').insertMany([
    {
      "id": 101,
      "name": "Laptop",
      "brand": "Dell",
      "price": 899.99,
      "category": "Electronics",
      "stock": 25
    },
    {
      "id": 102,
      "name": "Smartphone",
      "brand": "Samsung",
      "price": 699.99,
      "category": "Electronics",
      "stock": 50
    },
    {
      "id": 103,
      "name": "Wireless Headphones",
      "brand": "Sony",
      "price": 199.99,
      "category": "Accessories",
      "stock": 100
    }
  ]);

// Print a message to the output window.
console.log(`data uploaded successfully!`); 

