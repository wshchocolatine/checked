import React, { useState } from 'react'
import axios from 'axios'
import url from '../../url'


function New() {

    const [service, setService] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const changeService = (e) => {
        setService(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }


    const sendRequest = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('service', service)
        data.append('email', email)
        data.append('password', password)
        data.append('username', username)


        let config = {
            method: 'post',
            url: url + 'passwords',
            data: data
        }

        axios(config)
            .then((response) => {
                if (response.data === 200) {
                    setService("")
                    setEmail("")
                    setPassword("")
                    setUsername("")
                    let button = document.querySelector('button')
                    button.style.backgroundColor = '#46ff76'
                    button.innerText = 'Saved!'
                    setTimeout(() => {
                        button.style.backgroundColor = ''
                        button.innerText = 'Save'
                    }, 3000)
                }

                else {
                    alert('Erreur')
                }
            })
            .catch((e) => console.log(e))
    }

    return (
        <div id="container">
            <div className="menuContainer">
                <a href="/dashboard" className="linkMenu">passwords</a>
                <a href="" className="linkMenu linkMenuActive">new</a>
                <a href="/account" className="linkMenu">account</a>
                <a href="/about" className="linkMenu">about</a>
            </div>

            <div className="appContainer">
                <form autoComplete="off" className="formContainer">
                    <h1 className="heading">New Password</h1>
                    <div className="inputsContainer">
                        <div className="left">
                            <input placeholder="Name of Service" className="service" type="text" onChange={changeService} value={service} />
                            <input placeholder="Your Mail" className="mail" type="text" onChange={changeEmail} value={email} />
                        </div>
                        <div className="right">
                            <input placeholder="Your Password" className="password" type="text" onChange={changePassword} value={password} />
                            <input placeholder="Your Username" className="username" type="text" onChange={changeUsername} value={username} />
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <p className="seeSecurity">See our <span className="underline"><a href="/about#security">security</a></span></p>
                        <button onClick={sendRequest}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New