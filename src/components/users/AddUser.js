import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddUser = () => {
    let history = useNavigate();
    const [ user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        contact:""
    });
    const { name, username,email,contact } = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/")
        

    };

    return (
        <>
            <h2>Add User</h2>
            <div class="div1">
                <form action="" name="myform" method="post" onSubmit = { e =>onSubmit(e) }>
                    <label> Name</label> 
                    <input type="text" class="inputText" placeholder="Enter name"
                    name ="name"
                    value = {name} 
                    onChange = { e => onInputChange(e)} />
                    <br /><br />
                    <label> User Name</label>
                    <input type="text" class="inputText" placeholder="Enter the user name"
                    name = "username"
                    value = {username}
                    onChange = { e => onInputChange(e)} />
                    <br /><br />
                    <label>Email</label>
                    <input type="text" class="inputText" placeholder=" Enter the email"
                    name="email"
                    value = {email}
                    onChange = { e => onInputChange(e)}/>
                    <br /> <br />
                    <label>Contact Number</label>
                    <input type="tel" class="inputText" placeholder="Enter the number"
                    name = "contact"
                    value ={contact}
                    onChange = { e => onInputChange(e)} />
                    <br /><br />
                    <button className= "btn btn-primary btn-block">Add User</button>
                    <br />
                </form>
            </div>
        </>
    )
};

export default AddUser;