import { useDispatch } from 'react-redux'
import { chooseOperator } from './../slices/Calculator.slice'

interface OperatorProps {
    operator: string;
}

const Operator = (props:OperatorProps) => {
  const dispatch = useDispatch();

  return (
    <>
        <button className="operator" onClick={() => dispatch(chooseOperator({operator: props.operator}))}>{props.operator}</button>
    </>
  )
}

export default Operator