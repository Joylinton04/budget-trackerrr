import { createSlice } from "@reduxjs/toolkit";

export const PieChartData = createSlice({
    name: 'PieChartData',
    initialState: {
        DataExpense: [
            {
              "id": "Food/drinks",
              "label": "Food/drinks",
              "value":  0,
              "color": "hsl(289, 70%, 50%)"
            },
            {
              "id": "Vacation",
              "label": "Vacation",
              "value": 0,
              "color": "hsl(358, 70%, 50%)"
            },
            {
              "id": "Transport",
              "label": "Transport",
              "value": 0,
              "color": "hsl(224, 70%, 50%)"
            },
            {
              "id": "Hobbies",
              "label": "Hobbies",
              "value": 0,
              "color": "hsl(39, 70%, 50%)"
            },
            {
              "id": "Rent Apartment",
              "label": "Rent Apartment",
              "value": 0,
              "color": "hsl(359, 70%, 50%)"
            },
            {
              "id": "Others",
              "label": "Others",
              "value": 0,
              "color": "hsl(359, 70%, 50%)"
            },
          ],
        DataBudget: [
            {
              "id": "Food/drinks",
              "label": "Food/drinks",
              "value":  0,
              "color": "hsl(289, 70%, 50%)"
            },
            {
              "id": "Vacation",
              "label": "Vacation",
              "value": 0,
              "color": "hsl(358, 70%, 50%)"
            },
            {
              "id": "Transport",
              "label": "Transport",
              "value": 0,
              "color": "hsl(224, 70%, 50%)"
            },
            {
              "id": "Hobbies",
              "label": "Hobbies",
              "value": 0,
              "color": "hsl(39, 70%, 50%)"
            },
            {
              "id": "Rent Apartment",
              "label": "Rent Apartment",
              "value": 0,
              "color": "hsl(359, 70%, 50%)"
            },
            {
              "id": "Others",
              "label": "Others",
              "value": 0,
              "color": "hsl(359, 70%, 50%)"
            },
          ]
    },
    reducers: {
      updateExpenseValue: (state, action) => {
            const selectedCat = state.DataExpense.find(data => data.id == action.payload.category)
            if(selectedCat) {
                selectedCat.value += parseInt(action.payload.amount)
            }
        },
        updateBudgetValue: (state, action) => {
            const selectedCat = state.DataBudget.find(data => data.id == action.payload.category)
            if(selectedCat) {
                selectedCat.value += parseInt(action.payload.amount)
            }
            console.log(selectedCat.value)
        }
    }
})

export const { updateExpenseValue, updateBudgetValue} = PieChartData.actions;
export default PieChartData.reducer;