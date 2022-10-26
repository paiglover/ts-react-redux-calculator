import './../styles/Buttons.css'
import { useDispatch } from 'react-redux'
import { addNumber } from './../slices/Calculator.slice'

interface DigitProps {
    digit: string,
}

const Digit = (props:DigitProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <button className="digit" onClick={() => dispatch(addNumber({digit: props.digit}))}> {props.digit} </button>
    </>
    
  )
}

export default Digit