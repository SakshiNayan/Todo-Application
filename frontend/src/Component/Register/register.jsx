import React from 'react'

function Register() {
  return (
    <>
     <div>
        <form>
            <h1>REGISTER</h1>
            <div>
                <input type="text" required={true} placeholder='User Name'/>
            </div>
            <div>
                <input type="password" required={true} placeholder='Password'/>
            </div>
            <div>
                <input type="password" required={true}  placeholder='Confirm-Pass'/>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
     </div>
      
    </>
  )
}

export default Register
