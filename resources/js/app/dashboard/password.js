import axios from 'axios'
import React, {forwardRef} from 'react'

const PasswordContainer = forwardRef(
    ({service, email, password, username}, ref) => {
        
        const delet = (e) => {
            e.preventDefault()
            let id = e.target.parentNode.dataset.id
            let data = new FormData()
            data.append('id', id)

            let config = {
                method: 'delete',
                url: '/passwords',
                data: data
            }

            axios(config)
               .then((response) => {
                   if(response.data === 200) {
                       window.location.reload()
                   }

                   else {
                       alert('Erreur')
                   }
               })
               .catch(e => {
                   console.log(e)
               })
        }

        return (
            <div className="passContainer" ref={ref} data-id={ref}>
                <h1>{service}</h1>
                <input className="name" readOnly value={username} type="text" />
                <input className="mail" readOnly value={email} type="text" />
                <input className="password" readOnly value={password} type="text" /> 
            </div>
        )
    }
)

/*function PasswordContainer({service, email, password, username}) {
    return(
        <div className="passContainer">
            <h1>{service}</h1>
            <input className="name" value={username} type="text" />
            <input className="mail" value={email} type="text" />
            <input className="password" value={password} type="text" />
        </div>
    )
}*/

export default PasswordContainer