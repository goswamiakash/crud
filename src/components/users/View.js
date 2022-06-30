import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import {  useParams} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function View(){
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    },[])
    const loadUser = async () => {
        const res = await axios.get(`hhttp://localhost:3001/users/${id}`)
        setUser(res.data);
    }
    return(
        <>
        <div className='container'>
        <NavLink className="nav-link"  exact to="/" style={{marginRight:5 }}>Back to home</NavLink>
        <h1 className='display-4'>User Id: {id}</h1>
        <hr /> 
        <ul className='list-group w-50'>
        <li className='list-group-item' >name:{user.name}</li>
        <li className='list-group-item' >user name:{user.username}</li>
        <li className='list-group-item' >email:{user.email}</li>
        <li className='list-group-item' >phone number:{user.phone}</li>
        </ul>
        </div>
        </>
    )
}
export default View;