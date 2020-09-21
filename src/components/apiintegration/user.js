import React, { useState, useEffect } from 'react';
import api from '../../api';
export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function handleStoreUser() {
        await api.post('/users', {
            name,
            email,
            password
        }).then((response) => console.log(response)).catch((error) => console.log(error));

    }

    return (
        <>

            <div>
                <h1>Cadastrar usuário</h1>
                <h3>Nome</h3>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <h3>Email</h3>
                <input value={email} onChange={e => setEmail(e.target.value)}></input>
                <br />
                <h3>Senha</h3>
                <input value={password} onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                <button onClick={handleStoreUser}>Cadastrar</button>

            </div>

        </>
    )

}