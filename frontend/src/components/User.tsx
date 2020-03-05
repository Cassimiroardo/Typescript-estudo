import React from 'react'

interface IUser {
    name: string
    empresa: string
}

interface Props {
    user: IUser
}

const User: React.FC< Props > = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br/>
            <strong>Empresa: </strong> { user.empresa } <br/>
        </div>
    )
}

export default User;