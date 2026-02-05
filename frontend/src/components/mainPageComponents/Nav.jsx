import './Nav.css'
import { useState } from 'react';
import Register from '../../pages/registerPage.jsx'
import Login from '../../pages/loginPage.jsx'
import { useNavigate } from 'react-router';


function Nav() {

    const navigate = useNavigate()

    return (
        <>
        <div className="nav">
            <a href="/"><img src="\1x\logo3.png" alt="logo.png" width={70}/></a>
            
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
                <li>
                    <button onClick={()=>{
                        navigate('/user/update')
                    }}>
                        Update
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