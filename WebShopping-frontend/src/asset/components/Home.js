import './../css/Home.css'
import Header from './Header';
import Header2 from './Header2';
import Copyright from './Copyright';
import product_0 from './../image/product/0.jpg';
import product_1 from './../image/product/1.jpg';
import product_2 from './../image/product/2.jpg';
import product_3 from './../image/product/3.jpg';
import product_4 from './../image/product/4.jpg';
import product_5 from './../image/product/5.jpg';
import product_6 from './../image/product/6.jpg';
import product_7 from './../image/product/7.jpg';
import product_8 from './../image/product/8.jpg';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import AuthService from "./../service/auth.service";


const Home = () => {

    const currentUser = AuthService.getCurrentUser();

    const [products, setProduct] = useState([]);
    const [products2, setProduct2] = useState([]);
    const [products3, setProduct3] = useState([]);
    const [products4, setProduct4] = useState([]);
    const [products5, setProduct5] = useState([]);
    const [products6, setProduct6] = useState([]);
    const [products7, setProduct7] = useState([]);
    const [products8, setProduct8] = useState([]);


    useEffect(() => {
        axios
        .get("http://localhost:8080/products_list/")
        .then(({ data }) => {
            setProduct(data[0]);
            setProduct2(data[1]);
            setProduct3(data[2]);
            setProduct4(data[3]);
            setProduct5(data[4]);
            setProduct6(data[5]);
            setProduct7(data[6]);
            setProduct8(data[7]);
        })
        .catch((error) => {
           // console.log(error);
        });
    },[]);

    return(
        <div>
            <Header/>
            <Header2/>
         
                <div className='home'>
                    <br></br>
                    <br></br>
                    <div className='highlight'> <img className='image-highlight' src={product_0} alt=""/> </div> 
                    <h1 className='text-recommend'>Welcome : [{currentUser ? currentUser.username:""}]</h1>
                    <div className='box-home'>

                        <div className='box-1 frame'>
                            <div className='image-box'>
                             <img className='image' src={product_1} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>shiba_01</h6>
                                <h6>??????????????? : {products7.amount} ?????????</h6>
                                <h6>???????????? : {products7.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-2 frame'>
                            <div className='image-box'>
                            <img className='image' src={product_2} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>shiba_02</h6>
                                <h6>??????????????? : {products8.amount} ?????????</h6>
                                <h6>???????????? : {products8.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div>
                        <div className='box-3 frame'>
                            <div className='image-box'>
                                <img className='image' src={product_3} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>pusheen_01</h6>
                                <h6>??????????????? : {products4.amount} ?????????</h6>
                                <h6>???????????? : {products4.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-4 frame'>
                            <div className='image-box'>
                                <img className='image' src={product_4} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>pusheen_02</h6>
                                <h6>??????????????? : {products5.amount} ?????????</h6>
                                <h6>???????????? : {products5.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-5 frame'>
                            <div className='image-box'>
                                <img className='image' src={product_5} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>pusheen_03</h6>
                                <h6>??????????????? : {products6.amount} ?????????</h6>
                                <h6>???????????? : {products6.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-6 frame'>
                            <div className='image-box'>
                            <img className='image' src={product_6} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>bear_01</h6>
                                <h6>??????????????? : {products.amount} ?????????</h6>
                                <h6>???????????? : {products.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-7 frame'>
                            <div className='image-box'>
                            <img className='image' src={product_7} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>bear_02</h6>
                                <h6>??????????????? : {products2.amount} ?????????</h6>
                                <h6>???????????? : {products2.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                        <div className='box-8 frame'>
                            <div className='image-box'>
                            <img className='image' src={product_8} alt=""/>
                            </div>
                            <div className='details-box'>
                                <h6 className='details-image-box'>bear_03</h6>
                                <h6>???????????? : {products3.amount} ?????????</h6>
                                <h6>???????????? : {products3.price} ?????????</h6>
                                <button className='btn btn-light'>
                                    <i className="bi bi-cart4"></i>
                                </button>
                            </div>
                        </div> 
                    </div>
                    <br></br>
                    <br></br>
                    <div className='tab-change-page'>
                        <div className='page-button-all'>
                            <button className='btn btn-light page-button'>1</button>
                            <button className='btn btn-light page-button'>2</button>
                            <button className='btn btn-light page-button'>3</button>
                            <button className='btn btn-light page-button'>4</button>
                            <button className='btn btn-light page-button'><i className="bi bi-arrow-right"></i></button>
                        </div>      
                    <select className="form-select form-select-sm selcet-box" aria-label=".form-select-sm example">
                        <option defaultValue="0">8</option>
                        <option defaultValue="1">16</option>
                        <option defaultValue="2">24</option>
                        <option defaultValue="3">32</option>
                    </select>
                    <h3 className='text-select-box'>???????????????????????????????????????????????????????????????????????????</h3>
                    </div>
                </div>
            
            <Copyright/>
        </div>
    );
}

export default Home;