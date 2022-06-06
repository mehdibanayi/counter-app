import {decrement} from './../../store/slices/counterSlice'
import { useDispatch } from 'react-redux'


export default function DecrementButton() {

    const dispatch =useDispatch()
    const decrementHandler = () => {
        dispatch(decrement(4))
    }

    return (
        <button onClick={decrementHandler}>decrement</button>
    )
}


