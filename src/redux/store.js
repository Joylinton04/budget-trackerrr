import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './budgetReducer';
import PieChartDataReducer from './piechartdata';

const store = configureStore({
  reducer: {
    budget: budgetReducer,
    PieChartData: PieChartDataReducer
  },
})

export default store;