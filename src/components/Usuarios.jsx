import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Link
} from "react-router-dom";



const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const obtenerUsuarios = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
        const users = await res.data
        setUsuarios(users)

    }
    useEffect(() => {
        obtenerUsuarios()
    }, []);

    return (
        <div className='container'>
            <h2 className='my-3'>Usuarios</h2>
            <p>Seleciona un usuario para ver más datos</p>
            {
                usuarios.map((item) => (
                    <div key={item.id}>
                        <button type="button" class="list-group-item list-group-item-action">
                            <Link to={`usuario/${item.id}`} >
                                {item.name}
                            </Link>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Usuarios