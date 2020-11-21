import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {fetchClasses, editClass} from '../store/actions/adminActions'
import {fetchVolunteers} from '../store/actions/volunteerActions'

import VolunteerClassCard from './VolunteerClassCard'


const Volunteer = (props) => {
    const {fetchClasses, fetchVolunteers, adminReducer} = props
    useEffect(()=>{
        fetchClasses()
        fetchVolunteers()
    }, [])

    const [emptyClasses, setEmptyClasses] = useState([])

    useEffect(()=>{
        setEmptyClasses(adminReducer.classes.filter(item=>{
            return item.completed === 0 //*false
        }))
    }, [adminReducer.classes])

    return (
        <div>
            <div className="topbar"> 
                <h2>Hello (Volunteer Name) Component</h2>
            </div>
            <div className="admin classlist">
                <h2>Classes needing a volunteer:</h2>
                {emptyClasses.map(data=>{                  
                    return <VolunteerClassCard item={data} id={data.id} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {
        adminReducer: state.adminReducer,
        volunteersReducer: state.volunteersReducer
    }
}

export default connect(mapStateToProps, {
    fetchClasses,
    editClass,
    fetchVolunteers, 
})(Volunteer)

