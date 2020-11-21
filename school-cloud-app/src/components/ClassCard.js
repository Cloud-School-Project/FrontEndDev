import React, {useState} from 'react'
import {connect} from "react-redux"
import {editClass, deleteClass} from '../store/actions/adminActions'

import EditPopUp from './EditClassPopUp'

const ClassCard = (props) => {
    const {item, volunteers} = props // deconstructing
    console.log("classCard props", props)

    const [seePopUp, setSeePopUp] = useState({
        seen: false
    })

    const togglePopUp = (selection) => {
        console.log("here", selection)
        setSeePopUp({
            ...seePopUp,
            seen: !seePopUp.seen
        })
    }

    return (
        <div className="classCard"> 
            <h3>{item.subject}</h3>
            <p>
                Morning: {
                item.morning === null 
                ? <span>Needs Volunteer</span> 
                : <span>Filled by {volunteers[item.morning-1].username}</span>
                }
            </p>
            <p>
                Afternoon: {
                item.afternoon === null 
                ? <span>Needs Volunteer</span> 
                : <span>Filled by {volunteers[item.afternoon-1].username}</span>
                }
            </p>
            <p>
                Evening: {
                item.evening === null 
                ? <span>Needs Volunteer</span> 
                : <span>Filled by {volunteers[item.evening-1].username}</span>}
            </p>
            <div>
                <button className="btn" onClick={e=>{
                    e.preventDefault()
                    props.deleteClass(item.subject)
                }}> Delete
                </button>
                <button className="btn" onClick={e=>{
                    e.preventDefault()
                    togglePopUp(item.subject)
                }}> Edit
                </button>
                {console.log("seePop", seePopUp)}
                {seePopUp.seen ? <EditPopUp id={props.id} toggle={togglePopUp}/> : null}
                    
                    {/* e=>{
                    e.preventDefault()
                    props.editClass({subject: "History", morning: 2 })}
                    }> */}
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
