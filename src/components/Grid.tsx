import './../styles/Grid.css'
import { useSelector } from 'react-redux'
import Operator from './Operator'
import Digit from './Digit'
import Equals from './Equals'

const Grid = () => {
  const currentOperand = useSelector((state:any) => state.calculator.currentOperand)

  return (
    <>
      <div className='parent'>
        <div className="container">
          <div className='currentOperand'>{currentOperand}</div>
          <Operator operator='A/C' />
          <Operator operator='+/-' />
          <Operator operator='%' />
          <Operator operator='÷' />
          <Digit digit={'7'} />
          <Digit digit={'8'} />
          <Digit digit={'9'} />
          <Operator operator='x' />
          <Digit digit={'4'} />
          <Digit digit={'5'} />
          <Digit digit={'6'} />
          <Operator operator='-' />
          <Digit digit={'1'} />
          <Digit digit={'2'} />
          <Digit digit={'3'} />
          <Operator operator='+' />
          <Digit digit={'0'} />
          <Operator operator=',' />
          <Equals operator='=' />
        </div>
      </div>
    </>
  )
}

export default Grid