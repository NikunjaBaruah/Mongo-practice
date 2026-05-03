// Sales report pipeline: total revenue per 
// category, average order value, 
// top 5 products by sales count. 
// All in a single aggregation pipeline.

db.order1.aggregate([

    // Step 1: Break items array
    { $unwind: "$items" },
  
    // Step 2: Calculate revenue per item
    {
      $addFields: {
        revenue: { $multiply: ["$items.price", "$items.quantity"] }
      }
    },
  
    // Step 3: Run multiple pipelines
    {
      $facet: {
  
        //  1. Total revenue per category
        revenueByCategory: [
          {
            $group: {
              _id: "$items.category",
              totalRevenue: { $sum: "$revenue" }
            }
          }
        ],
  
        // 2. Average order value
        avgOrderValue: [
          {
            $group: {
              _id: "$orderId",
              orderTotal: { $sum: "$revenue" }
            }
          },
          {
            $group: {
              _id: null,
              avgOrderValue: { $avg: "$orderTotal" }
            }
          }
        ],
  
        // 3. Top 5 products
        topProducts: [
          {
            $group: {
              _id: "$items.product",
              totalSold: { $sum: "$items.quantity" }
            }
          },
          { $sort: { totalSold: -1 } },
          { $limit: 5 }
        ]
  
      }
    }
  
  ])