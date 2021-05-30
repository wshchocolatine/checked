import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Password from './password'


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
                   setEtat(200)
                   setPasswords(response.data)
               }
           })
           .catch((e) => console.log(e))
    }, [])

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
                        {passwords.map((password) => {
                            <Password
                            ref={password.id}
                            service={password.service}
                            username={password.username}
                            email={password.email}
                            password={password.password} />
                        })}
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
  
            <h1>No Passwords Yet</h1>
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

                <h2>Unauthorized</h2>
            </div>
        )
    }
}

export default Dashboard