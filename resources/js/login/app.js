import React, {useState} from 'react'
import '../../scss/src/login/login.scss'
import axios from 'axios'
import url from '../url'

function Login() {

    const [mailContent, setMailContent] = useState("")
    const [passwordContent, setPasswordContent] = useState("")

    const changeMail = (e) => {
        setMailContent(e.target.value)
    }

    const changePassword = (e) => {
        setPasswordContent(e.target.value)
    }

    const sendRequest = () => {

        console.log(mailContent)
            let data = new FormData()
            data.append('email', mailContent)
            data.append('password', passwordContent)

            let config = {
                method: 'post',
                url: url + 'login',
                data: data
            }

            axios(config)
               .then((response) => {
                   let rep = response.data

                   if (rep === 200) {
                       document.location.href = '/dashboard'
                   }

                   else {
                       alert('Mauvais mot de passe ou mauvais mail')
                   }
               })
               .catch((e) => {
                   console.log(e)
               })
    }

    return (
        <div id="container">
            <section className="left">
                <input 
                className="mail inputs" 
                placeholder="Mail" 
                type="mail" 
                onChange={changeMail} 
                value={mailContent} />
                <input 
                className="password inputs" 
                placeholder="Mot de Passe" 
                type="password"
                onChange={changePassword}
                value={passwordContent} /> 
                <button className="buttonSend" onClick={sendRequest}>Se Connecter</button>
                <a href="/register" className="registerLink">S'Inscrire</a> 
            </section>
            <section className="right">
                <p className="checked">checked!</p>
            </section>
        </div>
    )
}

export default Login