import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './../slices/Calculator.slice'

const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
    }
})

export default store;