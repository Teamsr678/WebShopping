import Header from "./Header";
import Header2 from "./Header2";
import Copyright from "./Copyright";
import './../css/register.css'
import * as React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useState, useEffect} from 'react'

function Register(){

    const { register, handleSubmit, formState: { errors }, watch} = useForm({
        username: "",
        email: "",
        password: ""
    });
    const password = useRef({});
    password.current = watch("password","");

    useEffect(() => {    
        
    });

    const [errorMessage_username, set_errorMessage_username] = useState("");
    const [errorMessage_email, set_errorMessage_email] = useState("");


    const onSubmit = (data) =>{       
            set_errorMessage_username(null);
            set_errorMessage_email(null); 
            axios.post('/register',{
                username: data.username,
                email: data.email,
                password: data.password
            })
            .then(response =>{
                if(response.status === 200){
                    window.location.replace("http://localhost:3000/register_success");
                }
            })
            .catch((error) => { 
                if(error.response.status === 400){
                    const errorMessage = error.response.data.message; // eslint-disable-next-line
                    if(errorMessage == "มีชื่อผู้ใช้นี้ในระบบแล้ว"){set_errorMessage_username(error.response.data.message);} // eslint-disable-next-line
                    if(errorMessage == "มีอีเมลล์นี้ในระบบแล้ว"){set_errorMessage_email(error.response.data.message);}
                }
            })
    }

    function handleChange(){
        set_errorMessage_username(null);
        set_errorMessage_email(null);
    }

    return(
        <div>
            <Header/>
            <Header2/>
            <div className="register">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="reister-box">
                        <h1 className="text-large top">สมัครสมาชิก</h1>
                        <input id="username" className="form form-control" placeholder="กรุณากรอกชื่อผู้ใช้" type="text" 
                        {...register("username", {
                            required:true, 
                            minLength: 4, 
                            }
                        )} onChange={handleChange}></input>
                        {errors.username && <h6 className="error-input-name">ชื่อผู้ใช้งานต้องมีความยาวอย่างน้อย 4 ตัวอักษร</h6>}
                        {(errors.username == null) && <h6 className="error-input-name">{errorMessage_username}</h6>}
                  
                        <input id="email" className="form form-control" placeholder="กรุณากรอกอีเมลล์" type="email" {...register("email",
                        {   
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //eslint-disable-line
                        })} onChange={handleChange}></input>
                        {errors.email && <h6 className="error-input-email">โปรดตรวจสอบอีเมลล์</h6>}
                        {errors.email == null && <h6 className="error-input-email">{errorMessage_email}</h6>}

                        <input id="password" className="form form-control" placeholder="กรุณากรอกรหัสผ่าน" type="password" {...register("password", {
                            required:"โปรดตรวจสอบรหัสผ่าน",
                            minLength: {
                                value:6,
                                message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"
                            }                       
                        })}></input>
                        {errors.password && <h6 className="error-input-password">{errors.password.message}</h6>}

                        <input id="password_repeat" className="form form-control" placeholder="กรุณากรอกรหัสผ่านอีกครั้ง" type="password" {...register("password_repeat", {
                            validate: value => value === password.current || "รหัสผ่านไม่ตรงกัน"
                        })}></input>
                        {errors.password_repeat && <h6 className="error-input-password_repeat">{errors.password_repeat.message}</h6>}

                        <button className="btn btn-blue btn-style-1" type="submit"><h6 className="text-light">สมัครสมาชิก</h6></button>                     
                    </div>
                </form>
            </div>
            
            <Copyright/>
        </div>
    );
    
}

export default Register;