import style from '../styles/Signstyle.module.css';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
const cx=classNames.bind(style);

function Signup(){

    const location = useLocation();
    const {activity} = location.state;

    const [isactive,setactivity]=useState();

    const container_class=cx({
        'container':true,
        'active':isactive,
    });

    let togglefunc=()=>{
        if(isactive){
            setactivity(false);
        }
        else{
            setactivity(true);
        }
    }
    
    return(
        <body className={style.signbody}> 
        <div className={container_class} id="container">
        <div className={`${style.form_container} ${style.signup}`}>
            <form>
                <h1>Create account</h1>

                <span>Use your email for registration</span>
                <ul>
                    <li>
                        <input type="text" placeholder="Name"/>
                    </li>
                    <li>
                        <input type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <input type="Password" placeholder="Password"/>
                    </li>
                </ul>
                <Link to='/'>
                <button >Sign up</button>
                </Link>
            </form>
        </div>

        <div className={`${style.form_container} ${style.signin}`}>
            <form>
                <h1>Sign In</h1>
                <span>Use your email</span>
                <ul>
                    <li>
                        <input type="text" placeholder="Name"/>
                    </li>
                    <li>
                        <input type="email" placeholder="Email"/>
                    </li>
                    <li>
                        <input type="Password" placeholder="Password"/>
                    </li>
                </ul>
                <a href="https://vk.com/clip243220223_456241503?c=1">Forgot your password?</a>
                <Link to='/'>
                <button >Sign in</button>
                </Link>
            </form>
        </div>

        <div className={style.toggle_container}>
            <div className={style.toggle}>
                <div className={`${style.toggle_panel} ${style.toggle_left}`}>
                    <h1>Hello, Heart Patient!</h1>
                    <span>Enter your personal details to use all of site features</span>
                    <button className={style.hidden} onClick={togglefunc} id="SignIn">SIGN IN</button>
                </div>

                <div className={`${style.toggle_panel} ${style.toggle_right}`}>
                    <h1>Welcome Back!</h1>
                    <span>Enter your personal details to use all of site features</span>
                    <button className={style.hidden} onClick={togglefunc} id="SignUp">SIGN UP</button>
                </div>
            </div>
        </div>
    </div>
        </body>
    );
}

export default Signup;