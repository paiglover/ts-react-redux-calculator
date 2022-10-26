import './../styles/Buttons.css'
import { useDispatch } from 'react-redux'
import { compute } from './../slices/Calculator.slice'

interface OperatorProps {
    operator: string;
}

const Equals = (props:OperatorProps) => {
    const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(compute())} className='operator'> = </button>
  )
}

export default Equals