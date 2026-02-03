import './NavBar.css'

function NavBar() {
    return (
        <>
        <div className="nav">
            <img src="\1x\logo3.png" alt="logo.png" width={70} />
            <ul className="nav-elements">
                <li><button>Login</button></li>
                <li><button>Register</button></li>
            </ul>
        </div>
        <hr className='nav-hr'/>
        </>
    )
}

export default NavBar