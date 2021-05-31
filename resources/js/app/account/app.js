import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Account() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [length, setLength] = useState("")

    useEffect(() => {
        let config = {
            method: "get",
            url: "/api/account"
        }
        axios(config)
           .then((response) => {
               if(typeof response.data == Number) {
                   alert('Erreur')
               }

               else {
                 setUsername(response.data.username)
                 setEmail(response.data.email)
                 setLength(response.data.length)
               }
           })
    })

    const logout = () => {
        let config = {
            method: 'get',
            url: '/logout'
        }

        axios(config)
        .then(() => {
            window.location.href = '/login'
        })
          .catch(e => console.log(e))
    }

    return(
    <div id="container">
        <div className="menuContainer">
            <a href="/dashboard" className="linkMenu">passwords</a>
            <a href="/new" className="linkMenu linkMenuActive">new</a>
            <a href="" className="linkMenu">account</a>
            <a href="/about" className="linkMenu">about</a>
        </div>

        <div className="appContainer">
            <form autoComplete="off" className="formContainer">
                <h1 className="heading">Account</h1>
                <div className="inputsContainer">
                    <div className="left">
                        <input value={username} readOnly className="service" type="text"/>
                        <input value={email} readOnly className="mail" type="text" />
                    </div>
                    <div className="right">
                        <input value={length + ' passwords'} readOnly className="password" type="text" />
                        <input value="Secure" readOnly className="username" type="text" />
                    </div>
                </div>
                <div className="buttonContainer">
                    <p className="seeSecurity">See our <span className="underline"><a href="/about#engagements">privacy</a></span></p>
                    <button onClick={logout}>Logout</button>
                </div>
            </form>
        </div>
    </div>
    )
}