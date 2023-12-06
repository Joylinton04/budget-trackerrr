import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './budgetReducer';

const store = configureStore({
  reducer: {
    budget: budgetReducer
  },
})

export default store;