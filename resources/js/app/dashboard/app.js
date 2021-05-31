import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PasswordContainer from './password.js'


function Dashboard() {
    let config = {
        method: 'GET',
        url: '/passwords'
    }

    const [etat, setEtat] = useState(0)
    const [passwords, setPasswords] = useState([])

    useEffect( () => {
        axios(config)
           .then((response) => {
               if(typeof response.data === Number) {
                   console.log('ghj')
                   setEtat(response.data)
                   return;
               }

               let data  = response.data
               let lengthData = data.length

               if(lengthData === 0) {
                   setEtat(201)
                   return;
               }

               else{
                   console.log('non')
                   setPasswords(response.data)
                   setEtat(200)
               }
           })
           .catch((e) => console.log(e))
    }, [])

    const redirect = (url) => {
        window.location.href = url
    }

    console.log(passwords)

    if(etat === 200) {
        return (
            <div id="container">
                <div className="menuContainer">
                    <a href="" className="linkMenu linkMenuActive">passwords</a>
                    <a href="/new" className="linkMenu">new</a>
                    <a href="/account" className="linkMenu">account</a>
                    <a href="/about" className="linkMenu">about</a>
                </div>
    
                    <div className="appContainer">
                        {passwords.map((password) => (
                            <PasswordContainer 
                            key={password.id}
                            service={password.service}
                            email={password.email}
                            password={password.password}
                            username={password.username} />
                        ))}
                        <div className="newPass">
                            <p>NEW</p>
                        </div>
                    </div>
            </div>
        )
    }

    else if(etat === 201) {
        return(
        <div id="container">
            <div className="menuContainer">
                <a href="" className="linkMenu linkMenuActive">passwords</a>
                <a href="/new" className="linkMenu">new</a>
                <a href="/account" className="linkMenu">account</a>
                <a href="/about" className="linkMenu">about</a>
            </div>
  
            <div className="errorContainer">
                <h2>No Passwords Yet :(</h2>
                <button>New</button>
            </div>
        </div>
        )
    }

    else {
        return (
            <div id="container">
                <div className="menuContainer">
                    <a href="" className="linkMenu linkMenuActive">passwords</a>
                    <a href="/new" className="linkMenu">new</a>
                    <a href="/account" className="linkMenu">account</a>
                    <a href="/about" className="linkMenu">about</a>
                </div>

                <div className="errorContainer">
                    <h2>Unauthorized</h2>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}

export default Dashboard