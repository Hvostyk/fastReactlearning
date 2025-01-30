import { useState } from "react"
import classNames from 'classnames';

    let [openburgermenu,setopenburgermenu]=useState('false');
    let [closeburgermenu,setcloseburgermenu]=useState('true');

    const burgerclass=classNames({
        'header-cover':true,
        'closeburgermenu':closeburgermenu,
        'openburgermenu':openburgermenu && !closeburgermenu,
        
    });

    const burgerbutt=classNames({
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
