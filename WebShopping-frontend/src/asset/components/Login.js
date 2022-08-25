import Header from "./Header";
import Header2 from "./Header2";
import Copyright from "./Copyright";
import './../css/login.css';

function Login() {
    return(
        <div>
            <Header/>
            <Header2/>
            <div className="login">
                <div className="login-box">
                    <h1 className="login-text">เข้าสู่ระบบ</h1>
                    <input id="username-login" className="input-form-username form-control" placeholder="ชื่อผู้ใช้" type="text"></input>
                    <input id="password-login" className="input-form-password form-control" placeholder="รหัสผ่าน" type="text"></input>
                    <button className="btn btn-login btn-login"><h3 className="text-light">เข้าสู่ระบบ</h3></button>
                    <div className="small-div-2">
                        <a href="/register" className="link link-dark small-text">สมัครสมาชิก</a>
                        <a href="/" className="link link-dark small-text">ลืมรหัสผ่าน</a>
                    </div>
                    <div className="small-div">
                        <div className="svg"></div>
                        <p className="text-or">หรือ</p>
                        <div className="svg"></div>
                    </div>
                    <button className="btn btn-login-google btn-danger"><i className="fa fa-google-plus" ></i><h3 className="text-light">Google</h3></button>
                </div>            
            </div>
            <Copyright/>
            
        </div>
    );
}

export default Login;