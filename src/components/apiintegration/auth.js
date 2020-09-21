import React, { useState, useEffect } from 'react';
import api from '../../api';
export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const AuthStr = 'Bearer'.concat(token);



    async function handleStoreAuth() {
        const response = await api.post('/login', {
            email,
            password
        });

        if (response.data.token) {
            setToken(response.data.token);
            setUser(response.data.user);
            console.log(user);
            console.log(token);
        }
    }

    async function handleStoreCompany() {
        api.get(api, {
            headers: { Authorization: AuthStr }
        }).then((response) => console.log(response.data)).catch((error) => console.log(error));

        api.post('/companies', {
            name,
            address,
        }, token).then((response) => console.log(response)).catch((error) => console.log(error));
    }



    return (
        <>

            <div>
                <h1>Login</h1>
                <h3>Email</h3>
                <input value={email} onChange={e => setEmail(e.target.value)}></input>
                <br />
                <h3>Senha</h3>
                <input value={password} onChange={e => setPassword(e.target.value)}></input>
                <br></br>
                <button onClick={handleStoreAuth}>Login</button>
            </div>
            <div>
                <h1>Cadastrar nova empresa</h1>
                <h3>Nome</h3>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <h3>Endereço</h3>
                <input value={address} onChange={e => setAddress(e.target.value)}></input>
                <button onClick={handleStoreCompany}>Cadastrar</button>
            </div>

        </>
    )

}