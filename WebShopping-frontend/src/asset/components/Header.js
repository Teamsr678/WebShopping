import './../css/Header.css'

function Header() {
    return(
        <div className="header-top">
            <div className="header">
                <a href='/' className="link-light logo">WebShopping</a>
                <input className='search_bar' type="text" placeholder=" "></input>
                <button className="btn btn-warning btn-squre-md search_button" type="submit">
                    <i className="bi bi-search"></i>
                </button>
                <div className='langauge_box'>
                    <a href='/' className='link-light'>TH</a>
                    <h6 className='text-light'>/</h6>
                    <a href='/' className='link-light'>EN</a>
                </div>
                <a href='/login' className='link-light login-botton'>Login</a>
                <button className='btn btn-light cart-botton'>
                    <i className="bi bi-cart4"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;