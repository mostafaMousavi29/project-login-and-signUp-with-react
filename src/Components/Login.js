import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"


//*import component js------------------------

import { Validate } from './Validate';
import {notify} from './Toast';
import styles from "./SignUp.module.css"

const Login = () => {
    const [data, setData]= useState({
        name            : "",
        email           : "",
        pasword         : "",
        confirmPasword  : "",
        inAccepted      : false
    })
    const [errors, setErrors]= useState({})
    const [touched, setTouched]= useState({})
    
    useEffect(()=>{
        setErrors(Validate(data, "Login"))
    },[data,touched])

    const changeHandler = event=>{
            setData({...data,[event.target.name]: event.target.value})
    }
    const touchedHandler = (event)=>{
        setTouched({...touched,[event.target.name] : true})
    }
    const submitHandler = event=>{
        event.preventDefault();
            if(!Object.keys(errors).length){
                notify("success LOgin","Success");
            }else {
                notify("error Login","error");
                setTouched({
                    email:true,
                    pasword: true,
                })
            }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>Login</h2>
                    
                    <div className={styles.formfiled}>
                        <label>email:</label>
                        <input 
                        className={(errors.email && touched.email ? styles.uncompleted : styles.forminput)}
                        type="email" 
                        name="email" 
                        value={data.email} 
                        placeholder="email" 
                        onChange={changeHandler} 
                        onFocus={touchedHandler}/>
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                    <div className={styles.formfiled}>
                        <label>password:</label>
                        <input 
                        className={(errors.pasword && touched.pasword ? styles.uncompleted : styles.forminput)}
                        type="password" 
                        name="pasword" 
                        value={data.pasword} 
                        placeholder="password" 
                        onChange={changeHandler} 
                        onFocus={touchedHandler}/>
                        {errors.pasword && touched.pasword &&<span>{errors.pasword}</span>}
                    </div>
                   
                    <div className={styles.formButton}>
                        <Link to="/SignUp">sign Up</Link>
                        <button type="submit">signUp</button>
                    </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;