import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"

//*import component js------------------------

import { Validate } from './Validate';
import {notify} from './Toast';
import styles from "./SignUp.module.css"

const SignUp = () => {
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
        setErrors(Validate(data, "signUp"))
    },[data,touched])

    const changeHandler = event=>{
        if(event.target.name === "inAccepted"){
            setData({...data,[event.target.name]: event.target.checked})
        }else {
            setData({...data,[event.target.name]: event.target.value})
        }
    }
    const touchedHandler = (event)=>{
        setTouched({...touched,[event.target.name] : true})
    }
    const submitHandler = event=>{
        event.preventDefault();
            if(!Object.keys(errors).length){
                notify("success signUp","Success");
            }else {
                notify("error signUp","error");
                setTouched({
                    name:true,
                    email:true,
                    pasword: true,
                    confirmPasword:true,
                    inAccepted: true
                })
            }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>signUp</h2>
                    <div className={styles.formfiled}>
                        <label>name:</label>
                        <input 
                        className={(errors.name && touched.name ? styles.uncompleted : styles.forminput)}
                        type="name" name="name" 
                        value={data.name} 
                        placeholder="name" 
                        onChange={changeHandler}
                        onFocus={touchedHandler}/>
                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>
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
                    <div className={styles.formfiled}>
                        <label>re-password:</label>
                        <input 
                        className={(errors.confirmPasword && touched.confirmPasword ? styles.uncompleted : styles.forminput)}
                        type="password" 
                        name="confirmPasword" 
                        value={data.confirmPasword} 
                        placeholder="confirmPasword" 
                        onChange={changeHandler} 
                        onFocus={touchedHandler}/>
                        {errors.confirmPasword && touched.confirmPasword &&<span>{errors.confirmPasword}</span>}
                    </div>
                    <div className={styles.formfiled}>
                        <div className={styles.chekedbox}>
                            <label>i accept term of policy</label>
                            <input 
                            type="checkbox" 
                            name="inAccepted" 
                            value={data.inAccepted}  
                            onChange={changeHandler} onFocus={touchedHandler}/>
                        </div>
                        {errors.inAccepted &&touched.inAccepted &&<span>{errors.inAccepted}</span>}
                    </div>
                    <div className={styles.formButton}>
                        <Link to="/Login">Login</Link>
                        <button type="submit">signUp</button>
                    </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;