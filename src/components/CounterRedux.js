import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "../redux/features/counter.feature";




// get the data form redux store
let CounterRedux = () => {
   let counterState = useSelector( (state => {
    return state['counter']
   }))

   let dispatch =  useDispatch();

   let {count} = counterState;

    let clickIncrement = () => {
        dispatch(increment());
    }

    let clickDecrement = () => {
        dispatch(decrement());
    }

    let clickIncrementBy = () => {
       dispatch(incrementBy(5));
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h1" > Count :{count}</p>
                                <button className="btn btn-success m-1" onClick={clickIncrement}>Increment</button>
                                <button className="btn btn-danger m-1" onClick={clickDecrement}>Decrement</button>
                                <button className="btn btn-warning m-1" onClick={clickIncrementBy}>Increment by 5</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default CounterRedux;