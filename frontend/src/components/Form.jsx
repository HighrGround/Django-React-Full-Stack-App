import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({route, method}){
    const [username, setUsername]=UseState("")
    const [password, setPassword]=UseState("")
    const [loading, setLoading]=UseState(false)
    const navigate = UseNavigate()
    const name = method === 'login' ? 'Login' : "Register"
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()    
    
    try {  
        const res = await api.post(route,{username, password})
        if(method  === "login"){
            localStorage.setItem(ACCESS_TOKEN, res.data.resfresh)
            localStorage.setItem(REFRESH_TOKEN, res.data.resfresh)
            navigate("/")
        }else {
            navigate("/login")
        }
    }catch   (error) {
        alert(error)
    }finally{
        setLoading(false)
    } 
    };


    return <form onsubmit={handleSubmit} classname='form-container'>
        <h1>{name}</h1>
    <input 
    classname ="form-input"
    type="text"
    value = {username}
    onChange = {(e) => setUsername(e.target.value)}
    placeholder = "Username"
    />
    <input 
    classname ="form-input"
    type="password"
    value = {password}
    onChange = {(e) => setPassword(e.target.value)}
    placeholder = "Username"
    />
    <button className="form-button" type="submit"
    >{name}</button>
    </form>
}



export default Form