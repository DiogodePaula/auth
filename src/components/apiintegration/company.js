import React, { useState, useEffect } from 'react';
import api from '../../api';
export default () => {

    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        api.get('/companies')
        .then((response) => setMarcas(response.data.companies))
        .catch((error) => console.log(error));
    }, []);

    return (
        <>

            <div>
                <h1>Empresas existentes</h1>
                <div>
                    <ul>
                        {marcas.map((marca) => <li key={marca.uid}>{marca.name}</li>)}
                    </ul>
                </div>
            </div>

        </>
    )

}