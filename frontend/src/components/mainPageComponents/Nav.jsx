import './Nav.css'
import { useState } from 'react';
import Register from '../../pages/registerPage.jsx'
import Login from '../../pages/loginPage.jsx'


function Nav() {


    return (
        <>
        <div className="nav">
            <img src="\1x\logo3.png" alt="logo.png" width={70} />
            <ul className="nav-elements">
                <li>
                    <button>
                        Home
                    </button>
                </li>
                <li>
                    <button>
                        Chat
                    </button>
                </li>
                <li>
                    <button>
                        Matches
                    </button>
                </li>
                <li><button onClick={()=>{
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    window.location.href = "/"
                }}>LogOut</button></li>
            </ul>
        </div>
        <hr className='nav-hr'/>
        </>
    )
}

export default Nav