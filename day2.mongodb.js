// db.products.aggregate([{
//     $match: { category: "Electronics" }// this will fetch only electronics products
// },
// {
//     $project: { name: 1, price: 1, _id: 0 }
// },{
//     $sort:{price:1}// this will sort the pricing in asending order
// },{
//     $skip: 2 // this will skipped first 2
// },{ 
//     $limit: 5 // this will allow only 5 outputs
// },{
//     $count :"pricc"
// }
// ])
// db.products.find({category:"Electronics"})
// db.products.aggregate([
//     {
//         $group: {
//             _id: "$category",
//             maxPrice :{$max : "$price"},
//             minPrice: {$min: "$price"}
//         }
//     }
// ])
// db.niku.aggregate(
//     {
//         $unwind:"$subjects"
//     }
// )