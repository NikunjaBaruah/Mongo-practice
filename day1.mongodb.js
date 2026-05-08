// use test
// show collections
// db.products.insertMany([
//     { name: "Laptop", category: "Electronics", price: 55000, stock: 10, brand: "HP", rating: 4.5 },
//     { name: "Smartphone", category: "Electronics", price: 20000, stock: 25, brand: "Samsung", rating: 4.2 },
//     { name: "Headphones", category: "Electronics", price: 2000, stock: 50, brand: "Boat", rating: 4.0 },
//     { name: "Shoes", category: "Fashion", price: 3000, stock: 30, brand: "Nike", rating: 4.3 },
//     { name: "T-shirt", category: "Fashion", price: 800, stock: 100, brand: "Puma", rating: 3.9 },
//     { name: "Watch", category: "Accessories", price: 5000, stock: 20, brand: "Fossil", rating: 4.6 },
//     { name: "Backpack", category: "Accessories", price: 1500, stock: 40, brand: "Wildcraft", rating: 4.1 },
//     { name: "Tablet", category: "Electronics", price: 30000, stock: 15, brand: "Apple", rating: 4.7 },
//     { name: "Keyboard", category: "Electronics", price: 1200, stock: 60, brand: "Logitech", rating: 4.4 },
//     { name: "Mouse", category: "Electronics", price: 700, stock: 80, brand: "HP", rating: 4.2 },

//     { name: "Jeans", category: "Fashion", price: 2000, stock: 35, brand: "Levis", rating: 4.3 },
//     { name: "Jacket", category: "Fashion", price: 4500, stock: 12, brand: "Zara", rating: 4.5 },
//     { name: "Sunglasses", category: "Accessories", price: 2500, stock: 18, brand: "RayBan", rating: 4.6 },
//     { name: "Charger", category: "Electronics", price: 900, stock: 70, brand: "Mi", rating: 4.0 },
//     { name: "Power Bank", category: "Electronics", price: 1800, stock: 45, brand: "Ambrane", rating: 4.1 },
//     { name: "Speaker", category: "Electronics", price: 3500, stock: 22, brand: "JBL", rating: 4.4 },
//     { name: "Monitor", category: "Electronics", price: 12000, stock: 14, brand: "Dell", rating: 4.5 },
//     { name: "Printer", category: "Electronics", price: 8000, stock: 9, brand: "Canon", rating: 4.2 },
//     { name: "Bag", category: "Fashion", price: 2500, stock: 28, brand: "Skybags", rating: 4.1 },
//     { name: "Cap", category: "Fashion", price: 500, stock: 90, brand: "Adidas", rating: 3.8 }
//   ])
// Find all products in the collection
// db.products.find()
// Find all products where category is Electronics
// db.products.find({"category":"Electronics"})
// Find all products with brand HP
// db.products.find({"brand":"HP"})
// Find products with price exactly 2000
// db.products.find({"price":2000})
// Find products where category is Fashion using $eq
// db.products.find({ category: { $eq:  "Fashion"} })
// Find products where brand is not HP
// db.products.find({brand : {$eq : "HP"}})
// Find products where category is not Electronics/
// db.products.find({category: {$ne : "Electronics"}})
// Find products with price greater than 10000
// db.products.find({price: {$gt :10000}})
// Find products with rating greater than 4.3
// db.products.find({rating: {$gt :4.3}})
// 📉 $lt
// Find products with price less than 1000
// db.products.find({price: {$lt: 1000}})
// Find products with stock less than 20
// db.products.find({stock:{$lt:20}})
// Find products where brand is HP, Dell, or Apple
// db.products.find({brand: {$in: ["HP","Dell","Apple"]}})
// Find products where category is Electronics or Accessories
// db.products.find({ category: { $in: ["Electronics", "Accessories"] } })
// 🚫 $nin
// Find products where brand is not in (HP, Dell)
// db.products.find({brand:{$nin:["HP","Dell"]}})
// Find products where category is not in (Fashion, Accessories)
// db.products.find({category:{$nin:["Fashion","Accessories"]}})
// 🔹 3. Logical Operators
// 🔗 $and
// Find products where:
// category = Electronics
// AND price > 10000
// db.products.find({
//     $and:
//         [{ category: { $in: ["Electronics"] } },
//         { price: { $gt: 10000 } }]
// })
// Find products where:
// brand = HP
// AND stock > 20
// db.products.find({
//     $and: [
//         { brand: {$in: ["HP"]}},
//         {stock:{$gt :20}}
//     ]
// })
// db.products.find({
//     $and: [
//         { brand: "HP" },
//         { stock: { $gt: 20 } }
//     ]
// })
// db.products.find({

//     brand: "HP" ,
//     stock: { $gt: 20 } 

// })
// 🔀 $or
// Find products where:
// category = Fashion
// OR price < 1000
// db.products.find({$or:[
//     {category:"Fashion"},
//     {price: {$lt:1000}}
// ]})
// Find products where:
// brand = Apple
// OR rating > 4.5
// use test;
// db.products.find({$or:[
//     {brand: "Apple"},
//     {rating: { $gt: 4.5} }
// ]})
// 🔹 4. Projection
// Show only name and price of all products
// db.products.find({}, { name: 1, price: 1,_id: 0 })
// Show only name, brand, rating (exclude _id)
// db.products.find({},{name:1, brand:1, rating:1,_id:0})
// Show only category and stock
// db.products.find({},{category:1, stock:1, _id :0})
// Sort all products by price (ascending)
// db.products.find().sort({price:1})
// Sort all products by price (descending)
// db.products.find().sort({price:-1})
// Sort products by rating (highest first)
// db.products.find().sort({rating:-1})
// Sort by stock (lowest first)
// db.products.find().sort({stock:1})
// 🔹 6. Limit & Skip
// Show first 5 products
// db.products.find().limit(5)
// Skip first 5 and show next 5 products
// db.products.find().limit(5).skip(5)
// Show top 3 most expensive products
// db.products.find().sort({price:-1}).limit(3)
// Show 5 products after skipping 10
// db.products.find().skip(10)
// 7. Update (updateOne)

// Update price of Laptop to 60000
// db.products.updateOne({name:"Laptop"},
// {$set:{price:60000}})
// Update stock of Smartphone to 50
// db.products.updateOne({name:"Smartphone"},{$set:{stock:50}})
// Change brand of Mouse to "Logitech Pro"
// db.products.updateOne({name:"Mouse"},{$set:{brand:"Logitech Pro"}})
// Increase rating of Tablet to 4.9
// db.products.updateOne({name:"Tablet"},{$inc:{rating:0.2}})
// Delete (deleteOne)
// Delete product with name Cap
// db.products.deleteOne({name:"Cap"})
// Delete product where price is less than 900
// db.products.deleteOne({price:{$lt:900}})
// db.products.deleteMany({price:{$lt:900}})
// Delete product with brand Puma
// db.products.deleteOne({brand:"Puma"})
// Delete one product from category Accessoriesdb
// db.products.deleteOne({category:"Accessories"})
// Find Electronics products with price > 5000 and rating > 4
// db.products.find({
//     category:{$in:["Electronics"]},
//     price:{$gt:5000},
//     rating:{$gt: 4}})
// Find products where:
// brand is HP or Dell
// AND price < 20000
// db.products.find({
    // brand:{$in:["HP","Dell"]},
    // price: {$lt:5000}

// })
// Show only name & price of products with price > 10000
// Sort Electronics products by rating and show top 3
// Find products not in category Fashion and price < 3000
db.products.aggregate({$match:{category:"Electronics"}})