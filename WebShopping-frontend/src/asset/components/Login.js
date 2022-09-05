import Header from "./Header";
import Header2 from "./Header2";
import Copyright from "./Copyright";
import './../css/login.css';
import * as React from "react";
import {useState} from 'react';
import AuthService from "./../service/auth.service";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm({
        username: "",
        password: ""
    });

    const [error, setError] = useState('');

    const onSubmit = (data) =>{
        setError(null);
        AuthService.login(data.username,data.password)
        .then(() =>{
                window.location.replace("http://localhost:3000/");
        })
        .catch((error) => {
            if(error.response.status !== 200) {setError("Id or Password is wrong");}
        })
    }
    
    return(
        <div>
            <Header/>
            <Header2/>
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-box">
                        <h1 className="login-text">เข้าสู่ระบบ</h1>
                        <input id="username-login" className="input-form-username form-control" placeholder="ชื่อผู้ใช้" type="text" {...register("username",{ required: true, maxLength: 30 })}></input>
                        <input id="password-login" className="input-form-password form-control" placeholder="รหัสผ่าน" type="password" {...register("password",{ required: true, maxLength: 30 })}></input>
                        <h6 className="error-login">{error}</h6>
                        <button className="btn btn-login login-a" type="submit"><h3 className="text-light">เข้าสู่ระบบ</h3></button>
                        <div className="small-div-2">
                            <a href="/register" className="link link-dark small-text">สมัครสมาชิก</a>
                            <a href="/" className="link link-dark small-text">ลืมรหัสผ่าน</a>
                        </div>
                        <div className="small-div">
                            <div className="svg"></div>
                            <p className="text-or">หรือ</p>
                            <div className="svg"></div>
                        </div>
                        <button className="btn btn-login-google btn-danger" ><i className="fa fa-google-plus" ></i><h3 className="text-light">Google</h3></button>
                    </div>
                </form>     
            </div>
            <Copyright/>
            
        </div>
    );
}

export default Login;