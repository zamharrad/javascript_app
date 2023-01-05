import React, { useState ,setState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelected } from "../redux/features/employees.feature";
import { EmployeeServices } from "../services/EmployeeServices";

let EmployeesRedux = () => {

    let dispatch = useDispatch();
    // let [state, setState] = useState({
    //     employees: EmployeeServices.getAllEmployees()
    // });

    // get the store data from redux
    let employeeState = useSelector((store) => {
        return store['employees']
    })

    let { employees } = employeeState;

    let changeUpdateSelected = (empId) => {
       dispatch(updateSelected(empId))
    };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(employees)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Employees</p>
                        <p>We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {
                                employees.length > 0 &&
                                employees.map(employee => {
                                    return (
                                        <li key={employee.id} className='list-group-item'>
                                            <input checked={employee.isSelected} onChange={() => changeUpdateSelected(employee.id)} className="form-check-input me-2" type='checkbox' />
                                            {employee.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className="col-md-6">
                        {employees.length > 0 &&
                            employees.map(employee => {
                                return (
                                    employee.isSelected &&
                                    <div className="card my-2">
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    Name : <span className="fw-bold"> {employee.name}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                )
                            })}
                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}

export default EmployeesRedux;