import { useState } from "react";
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import style from '../styles/Header.module.css';

const cx=classNames.bind(style);

function Header(){

let [openburgermenu,setopenburgermenu]=useState('false');
let [closeburgermenu,setcloseburgermenu]=useState('true');

const burgerclass=cx({
    'header_cover':true,
    'closeburgermenu':closeburgermenu,
    'openburgermenu':openburgermenu && !closeburgermenu,
    
});

const burgerbutt=cx({
    'burgerbutt':true,
    'openburger':openburgermenu && !closeburgermenu,
    'closeburger':closeburgermenu,
});

let burgmenu=()=>{
    if(closeburgermenu){
        setcloseburgermenu(false);
        setopenburgermenu(true);
    }
    else{
        setcloseburgermenu(true);
        setopenburgermenu(false);
    }
}

    return(  
            <header className={style.header}>
                <div className={burgerbutt}>
                    <a className={style.burger_button} onClick={burgmenu}><span></span></a>
                </div>

                <div className={burgerclass}>
                    <div className={style.header_logo}>
                        <img src="./public/images/que pro.webp" alt=""/>
                    </div>

                <div className={style.header_list}>
                    <ul className={style.header_list_strings}>
                        <li className={style.catalog}><button><img src="./public/images/free-icon-energy-drink-2619444.png" alt=""/></button></li>
                        <li className={style.contact}><button>contacts</button></li>
                    </ul>
                </div>

                <div className={style.header_input}>
                    <ul>
                        <li className={style.bag}><button><img src="./public/images/free-icon-basketball-hoop-17647987.png" alt=""/></button></li>
                        <li><input type="search" placeholder="search the energy drink"></input></li>
                    </ul>
                </div>

                <div className={style.header_buttons}>
                    <div className={`${style.header_buttons_cover} ${style.SUP}`}>
                        <Link to="signup" state={{ activity:true}}>
                        <button id="signup">create account</button>
                        </Link>
                    </div>
                    <div className={`${style.header_buttons_cover} ${style.SIN}`}>
                        <Link to="signup" state={{ activity:false}}>
                            <button id="signin">Sign in</button>
                        </Link>
                    </div>
                </div>

            </div>
            </header>   
    );

}

export default Header;