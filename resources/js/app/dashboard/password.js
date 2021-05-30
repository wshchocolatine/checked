import React, {forwardRef} from 'react'

const Password = forwardRef(
    ({service, email, password, username}, ref) => {
        return (
            <div className="passContainer" ref={ref}>
                <h1>{service}</h1>
                <input className="name" value={username} type="text" />
                <input className="mail" value={email} type="text" />
                <input className="password" value={password} type="text" />
            </div>
        )
    }
)

export default Password