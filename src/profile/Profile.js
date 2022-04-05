import React from 'react'

function Profile(props) {
   
  return (
    
    <div>

        {props.children} 
        <h2>{props.fullName}</h2> 
        <h4>{props.profession}</h4>
        <p>{props.bio}</p>
        
        


    </div>
  )
}

export default Profile