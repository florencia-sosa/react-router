import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from "react-router-dom";

const User = () => {
    const [usuario, setUsuario] = useState([]);
    const { id } = useParams();
    const obtenerUsuario = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user);
    }
    useEffect(() => {
        obtenerUsuario()
    }, []);

    return (
        <div className='container'>
            <h2 className= "my-3"> Datos de {usuario.name}</h2>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <td >{usuario.username}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Email</th>
                        <td >{usuario.email}</td>
                    </tr>

                    <tr>
                        <th scope ="col">Phone</th>
                        <td >{usuario.phone}</td>
                    </tr>

                    <tr>
                        <th scope="col">WebSite</th>
                        <td >{usuario.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default User