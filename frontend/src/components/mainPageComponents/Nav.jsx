import './Nav.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Nav() {

    const navigate = useNavigate()

    return (
        <>
            <div className="nav">
                <a href="/"><img src="\1x\logo3.png" alt="logo.png" width={70} /></a>

                <ul className="nav-elements flex-wrap">
                    <li>
                        <button onClick={() => {
                            navigate('/interactions')
                        }} >
                            <img src="/navIcons/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="/navIcons/chat_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="/navIcons/heart_check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => {
                            navigate('/user/update')
                        }}>
                            <img src="/navIcons/edit_square_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                        </button>
                    </li>
                    <li><button onClick={() => {
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        window.location.href = "/"
                    }}>
                        <img src="/navIcons/logout_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png" alt="" />    
                    </button></li>
                </ul>
            </div>
            <hr className='nav-hr' />
        </>
    )
}

export default Nav