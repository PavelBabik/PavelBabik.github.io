import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import  {withState}  from '../..node_modules/recompose'

const User = ({isRegister, setRegister}) => {
    const submit = value => {
        console.log(value)
    }
    return (
        <div className="pt-3">
            <div className="form-check">
               <input checked={isRegister} onChange={()=> setRegister( reg => !reg)} 
                type="checkbox"  name="isRegister" id="isRegister"  className="form-check-input" 
                />
                <label className="form-check-label" htmlFor="isRegister">Switch to {isRegister ? 'Login': 'Register'}</label>
            </div>
            <hr />

           <h2>{isRegister ? 'Register': 'Login'}</h2>
          
           {isRegister ? <RegisterForm submit={submit} /> : <LoginForm submit={submit} />}
        </div>
    )
}
export default withState("isRegister", "setRegister", false)(User)