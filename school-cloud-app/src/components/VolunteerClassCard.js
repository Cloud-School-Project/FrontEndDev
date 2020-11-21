import React from 'react'


const VolunteerClassCard = props => {
    const {item, volunteers} = props // deconstructing
    
    return (
        <div className="classCard"> 
            <h3>{item.subject}</h3>
            <p className="subtext">*Click an open slot to assign*</p>
            {item.morning === null 
            ? <p>Morning: <button>Teach This Class</button></p>
            : <strike>Morning</strike>}
            {/* Add in an "are you sure you are available for this class?" pop up */}
            
            {item.afternoon === null 
            ? <p>Afternoon: <button onClick={e=>{
                    e.preventDefault()
                }}>
                    Teach This Class
                </button></p>
            : <strike>Afternoon</strike>}

            {item.evening === null 
            ? <p>Evening: <button>Teach This Class</button></p>
            : <strike>Evening</strike>}

            <button>Class Details</button>
        </div>
    )
}

export default VolunteerClassCard
