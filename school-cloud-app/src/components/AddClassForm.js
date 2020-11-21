import React, {useState} from 'react'
import {connect} from "react-redux"
import { NavLink, useHistory } from 'react-router-dom'
import {addClass} from '../store/actions/adminActions'


const initialState = {
    subject: ''
}

const AddClassForm = (props) => {
    const history = useHistory()

    const [newClass, setNewClass] = useState(initialState)

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        setNewClass({
            ...newClass, 
            [ev.target.name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addClass(newClass)
        history.push('/admin')
    };

    return (
        <div>
            <NavLink exact to="/admin"> Home </NavLink>
            <h2>Create New Class</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="subject"
                onChange={changeHandler}
                placeholder="subject"
                value={newClass.subject}
                />
                <button>Add New Class</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return state.adminReducer
}

export default connect(mapStateToProps, {addClass})(AddClassForm)