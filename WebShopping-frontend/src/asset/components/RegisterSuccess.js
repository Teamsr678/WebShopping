import Header from "./Header";
import Header2 from "./Header2";
import Copyright from "./Copyright";
import './../css/RegisterSuccess.css';

function RegisterSuccess(){
    return(
        <div>
            <Header/>
            <Header2/>
            <div className="RegisterSuccess">
                <div className="box-registersuccess">
                    <h1>สมัครสมาชิกเสร็จสิ้น</h1>
                    <a href="/login"><button>ไปยังหน้าเข้าสู่ระบบ</button></a>
                </div>
            </div>
            <Copyright/>
        </div>
    );
}

export default RegisterSuccess;