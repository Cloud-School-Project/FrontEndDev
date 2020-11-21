import React, {useState, useEffect} from 'react'
import {useDispatch, connect} from "react-redux"
import { editClass } from '../store/actions/adminActions'

const initialState = {
    completed: false, //(true or false)
    subject: "empty", //(name of class)
    morning: null, //(id of the volunteer)
    afternoon: null, //(id of volunteer)
    evening: null //(no volunteer)
}

const EditPopUp = (props) => {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState(initialState)

    useEffect(()=>{
        console.log("props.classes", props.classes)
        let tempHolder = props.classes
        console.log("temph", tempHolder)
        setFormValues(tempHolder)
        console.log("useEffect", formValues)
    },[])

    const handleClick = (e) => {
        e.preventDefault()
        props.toggle()
    }

    const changeHandler = (e) => {
        e.persist()
        let value = e.target.value;
        console.log("e.target", e.target)
        setFormValues({
            ...formValues,
            subject: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editClass(formValues))
        props.toggle()
    }

    return (
        <div className="modal" style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.25)",
        }}>
            <div className="modal_content" style={{
                position: "absolute",
                backgroundColor: "white",
                border: "2px solid black"
            }}>
                <span className="close" onClick={handleClick}>&times;</span>
                <h2>Update Class Info</h2>
                <form onSubmit={handleSubmit}>
                    Subject
                    <input 
                        type="text"
                        name="subject"
                        onChange={changeHandler}
                        placeholder="subject"
                        value={formValues}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.adminReducer
}

export default connect(mapStateToProps, {
    editClass, 
})(EditPopUp)