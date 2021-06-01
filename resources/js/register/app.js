import React, { useState } from 'react'
import '../../scss/src/register/register.scss'
import axios from 'axios'
import url from '../url'

function Register() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeMail = (e) => {
        setMail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }


    const sendRequest = () => {
        let data = new FormData()
        data.append('username', name)
        data.append('email', mail)
        data.append('password', password)

        let config = {
            method: 'post',
            url: url + 'register',
            data: data
        }

        axios(config)
            .then((response) => {
                if (response.data === 200) {
                    window.location.href = '/dashboard'
                }

                else {
                    setName("")
                    setMail("")
                    setPassword("")
                    let mail = document.querySelector('.mail')
                    mail.classList.add('error')
                    mail.placeholder = 'Mail alread took'
                }
            })
            .catch((e) => console.log(e))
    }

    return (
        <div id="container">
            <section className="left">
                <input
                    className="name inputs"
                    placeholder="Name"
                    type="text"
                    onChange={changeName}
                    value={name} />
                <input
                    className="mail inputs"
                    placeholder="Mail"
                    type="email"
                    onChange={changeMail}
                    value={mail} />
                <input
                    className="password inputs"
                    placeholder="Mot de Passe"
                    type="password"
                    onChange={changePassword}
                    value={password} />
                <div className="inputIndicator"></div>
                <div className="buttonContainer">
                    <button className="buttonSend" onClick={sendRequest}>S'Inscrire</button>
                    <p className="seeEngagements">See our <a className="engagementsLink" href="/about#engagements">
                        engagements</a>.</p>
                </div>
                <a href="/login" className="loginLink">Se Connecter</a>
            </section>
            <section className="right">
                <p className="checked">checked!</p>
            </section>
        </div>
    )
}

export default Register