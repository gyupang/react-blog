import React, {useState} from 'react';
import logo from '../../img/logo.png';
import { FcMenu,FcExpand } from "react-icons/fc";
import './header.css';
const Header = () => {

    const [mobile,setMobile] = useState(false)
    return (
        <header>
            <div className="container d-flex">
                <div className="logo">
                    <img src={logo} alt="포트폴리오" />
                </div>

                <div className="navlink">
                    <ul className={mobile? "nav-link-mobile" : "link f-flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href="#features">features</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#">메뉴3</a></li>
                        <li><a href="#">메뉴4</a></li>
                        <li><a href="#">메뉴5</a></li>
                        <li><button className='home-btn'>PDF DOWN</button></li>


                    </ul>
                </div>
{/* 모바일 UI */}

<button className='toggle' onClick={()=>setMobile(!mobile)}>
{mobile ? <FcExpand className='close home-btn'/> : <FcMenu className='open'/> }

</button>

            </div>
        </header>
    );
};

export default Header;