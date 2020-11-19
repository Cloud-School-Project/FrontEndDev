import React from 'react'
import {connect} from "react-redux"
import {editClass, deleteClass} from '../store/actions/adminActions'

const ClassCard = (props) => {
    console.log("cardProps", props)
    const {item, volunteers} = props // deconstructing
    // console.log("props.item", props.item.subject)
    return (
        <div className="classCard"> 
            <h3>{item.subject}</h3>
            <p>
                Morning: {
                item.morning === null 
                ? <span>Needs Volunteer</span> 
                : <span>Filled by {volunteers[item.morning-1].username}</span>
            }</p>
            <p>Afternoon: {item.afternoon === null ? <span>Needs Volunteer</span> : <span>Filled by {volunteers[item.afternoon-1].username}</span>}</p>
            <p>Evening: {item.evening === null ? <span>Needs Volunteer</span> : <span>Filled by {volunteers[item.evening-1].username}</span>}</p>
            <div>
                <button onClick={e=>{
                    e.preventDefault()
                    console.log("event", e)
                    console.log("subject", item.subject)
                    props.deleteClass(item.subject)
                }}>
                    Delete
                </button>
                <button onClick={e=>{
                    e.preventDefault()
                    props.editClass({subject: "History", morning: 2 })
                }}>
                    Edit
                </button>
            </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return state.volunteersReducer
}

export default connect(mapStateToProps, {
    editClass, 
    deleteClass
})(ClassCard)
