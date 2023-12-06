import { createSlice } from "@reduxjs/toolkit";


export const budgetSlice = createSlice({
    name: 'budget',
    initialState:{
        budget:[
            {
              id:1,
              budget: 5000,
              category: "food/drinks",
              account: "Paypal",
              date: '20 december'
            },
            {
              id:2,
              budget: 2000,
              category: "food/drinks",
              account: "Paypal",
              date: '20 december'
            },
            {
              id:3,
              budget: 2000,
              category: "food/drinks",
              account: "Paypal",
              date: '20 december'
            },
          ],
        expenses:[
          {
          id:1,
          budgetId: 1,
          expense: 2000,
          category: "food/drinks",
          account: "Paypal",
          date: '20 december',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nihil tempore possimus deleniti. At perspiciatis nam similique consectetur asperiores autem delectus voluptas nulla sed earum? Animi aspernatur hic architecto est.'
        },
        {
          id:2,
          budgetId: 2,
          expense: 2000,
          category: "vacation",
          account: "Paypal",
          date: '20 december',
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nihil tempore possimus deleniti. At perspiciatis nam similique consectetur asperiores autem delectus voluptas nulla sed earum? Animi aspernatur hic architecto est."
        },
        {
          id:3,
          budgetId: 3,
          expense: 2000,
          category: "Transport",
          account: "Paypal",
          date: '20 december',
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nihil tempore possimus deleniti. At perspiciatis nam similique consectetur asperiores autem delectus voluptas nulla sed earum? Animi aspernatur hic architecto est."
        },
      ],
    },
    reducers: {
        
    }
})

export default budgetSlice.reducer;