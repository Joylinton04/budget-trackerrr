import { createSlice } from "@reduxjs/toolkit";


export const budgetSlice = createSlice({
    name: 'budget',
    initialState:{
        budget:[],
        expenses:[],
    },
    reducers: {
        addToBudget: (state, action) => {
            state.budget.push(action.payload)
        },
        addToExpenses: (state, action) => {
            state.expenses.push(action.payload)
        },
        removeBudget: (state, action) => {
          state.budget = state.budget.filter(budget => budget.id !== action.payload)
        }
    }
})
export const { addToBudget, addToExpenses, removeBudget } = budgetSlice.actions
export default budgetSlice.reducer;