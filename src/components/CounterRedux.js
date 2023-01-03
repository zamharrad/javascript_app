import React, {useState} from "react";

let CounterRedux = () => {

    let  [state, setState] = useState({
        count : 0
    });

    let clickIncrement = () => {
        setState( {
            count: state.count +1
        })
    }

    let clickDecrement = () => {
        setState( {
            count: state.count -1
        })
    }

    let clickIncrementBy = () => {
        setState( {
            count: state.count + 5
        })
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h1" > Count :{state.count}</p>
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