import React from "react"
import RegistrationForm from "./forms/RegistrationForm"
import api from "../api"

function SignupPage({history, setMessage}) {

  const submit = user =>
    api.users.create(user)
    .then(() => setMessage("You have been successfully signup"))
    .then(() => history.push('/login'))
  return (
    <div className="ui grid">
      <div className="eight wide column">
        <RegistrationForm submit= {submit}/>
      </div>
    </div>
  )
}

export default SignupPage