import './NavBar.css'
import { useState } from 'react';
import Register from '../../pages/registerPage.jsx'


function NavBar() {

    const [showRegister,setShowRegister] = useState(false)

    return (
        <>
        <div className="nav">
            <img src="\1x\logo3.png" alt="logo.png" width={70} />
            <ul className="nav-elements">
                <li><button>
                    Login
                    </button></li>
                <li><button onClick={()=>{
                    setShowRegister(true)
                }}>
                    Register
                    </button></li>
            </ul>
        </div>
        <hr className='nav-hr'/>
        {showRegister && (<Register isModal onClose={()=>{
                setShowRegister(false)
            }}/>)}
        </>
    )
}

export default NavBar