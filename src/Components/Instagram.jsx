import React, { useEffect, useState } from 'react'

function Instagram() {
    const[users,setUser]= useState([])
const[loading,setLoading]=useState(true)


//FETCH
    async function fetchUsers(){
        try {
            const response= await fetch('https://api.github.com/users')
            const result = await response.json()
            setUser(result)  
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("Error:",error)
        }
        
    }

    
useEffect(()=>{
   setTimeout(()=>{
    fetchUsers()
   },2000)
    
},[])

if(loading){
  return <p className='load'>Loading...</p>
}

if(!loading){ 
  return (
    <div className='main'>
        <div className='git-box'>
            <h1>GitHub Users</h1>
            <ol className='profile-box'>
                {users.map((user)=>{ 
                    const{id,avatar_url,login,html_url} = user;
                    return (<li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <p>{login}</p>
                        <a href={html_url} target="_blank" rel="noopener noreferrer" className='visit-btn'>Visit in GitHub</a>
                    </li>)
                })}
            </ol>
        </div>
    </div>
  )
}

}
export default Instagram