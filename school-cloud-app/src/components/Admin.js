import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import { NavLink } from "react-router-dom";

import {fetchClasses, addClass, editClass, deleteClass} from '../store/actions/adminActions'
import {fetchVolunteers} from '../store/actions/volunteerActions'
import { volunteersReducer } from '../store/reducers/volunteersReducer';

import ClassCard from './ClassCard'


const Admin = (props) => {
    const {fetchClasses, fetchVolunteers, adminState} = props
    useEffect(()=>{
        fetchClasses()
        fetchVolunteers()
    }, [])

    const [completedClasses, setCompletedClasses] = useState([])
    const [emptyClasses, setEmptyClasses] = useState([])
    // const [runningClasses, setRunningClasses] = useState([])

    //Creates empty and filled class arrays whenever there is a change to props.classes
    useEffect(()=>{
        setEmptyClasses(adminState.classes.filter(item=>{
            return item.completed === 0 //*false
        }))
        setCompletedClasses(adminState.classes.filter(item=>{
            return item.completed === 1 //*true
        }))
        // setRunningClasses(props.classes.filter(item=>{
        //     return (item.morning !== null || item.afternoon !== null || item.evening !== null)
        // }))
    }, [adminState.classes]) 

    return (
        <div>
            <div className="topbar"> 
                {/* How to make this into a component? vv */}
                {/* Pass property of username via prop drilling */}
                <h2>Hello (Admin Name) Component</h2>
                <NavLink exact to='/admin/add-class'>Create New Class</NavLink>
            </div>
            <div className="admin classlist">
                <h2>Classes needing a volunteer:</h2>
                {emptyClasses.map(data=>{                  
                    return <ClassCard item={data} id={data.id} />
                })}
            </div>
            <div className="admin classlist">
                <h2>Completed Classes:</h2>
                {completedClasses.map(data=>{
                    return <ClassCard item={data} id={data.id}/>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {
        adminState: state.adminReducer,
        // volunteersReducer: state.volunteersReducer
    }
}

export default connect(mapStateToProps, {
    fetchClasses,
    fetchVolunteers,
    addClass, 
    editClass, 
    deleteClass
})(Admin)