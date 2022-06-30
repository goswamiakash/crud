import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });
    const { name, username, email, phone } = user;
    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        navigate("/");
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data);
    }
    return (
        <>
            <div className='container'>
                <div className='w-75 mx-auto shadow p-5'>
                    <h2 className='text-center mb-4'>Edit User</h2>
                    <form onSubmit={e => onSubmit(e)} >
                        <div class="form-group">
                            <input typeof='text' className='form-control form-control-lg' placeholder='name' name='name' value={name} onChange={e => onInputChange(e)} />
                        </div><br />
                        <div class="form-group">
                            <input typeof='text' className='form-control form-control-lg' placeholder='username' name='username' value={username} onChange={e => onInputChange(e)} />
                        </div><br />
                        <div class="form-group">
                            <input typeof='text' className='form-control form-control-lg' placeholder='email' name='email' value={email} onChange={e => onInputChange(e)} />
                        </div><br />
                        <div class="form-group">
                            <input typeof='text' className='form-control form-control-lg' placeholder='phonenumber' name='phone' value={phone} onChange={e => onInputChange(e)} />
                        </div><br />
                        <button className="btn btn-warning">Edit User</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditUser;