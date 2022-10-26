import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'calculatorSlice',
    initialState: {
        currentOperand: '', 
        previousOperand: '',
        operator: undefined,
    },
    reducers: {

        addNumber: (state, action) => {
            state.currentOperand = state.currentOperand + action.payload.digit
        },
        chooseOperator: (state, action) => {
            state.operator = action.payload.operator;
            state.previousOperand = state.currentOperand
            state.currentOperand = ''
        },
        compute: (state) => {
            let currOp = parseInt(state.currentOperand)
            let prevOp = parseInt(state.previousOperand)

            switch (state.operator) {
                case '+':
                    state.currentOperand = currOp + prevOp
                    break
                    case '-':
                        state.currentOperand = prevOp - currOp
                        break
                        case 'x':
                            state.currentOperand = currOp * prevOp
                            break
                            case '÷':
                                state.currentOperand = prevOp / currOp
                                break
                                case '%':
                                    state.currentOperand = prevOp % currOp
                                    break
                default:
                    break;
            }
        }
    }
})

export const { addNumber, chooseOperator, compute } = calculatorSlice.actions
export default calculatorSlice.reducer