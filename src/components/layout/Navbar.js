import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navDiv">
            <nav className="nav">
                <span className="logoResp"><Link to='/'><img className="logo" src="Logo.svg" /></Link></span>
                <ul className="navUlResp">
                    <li className="navLiTitle">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="navLiTitle">
                        <Link to='/about-us'>ABOUT US</Link>
                    </li>
                    <li className="navLiTitle">
                        <Link to='/contact-us'>CONTACT US</Link>
                    </li>
                    <li>
                        <a href="https://github.com/login" target="_blank"><button className="loginBtn" type="button">Log in</button></a>
                    </li>
                </ul>
            </nav>
            <hr className="line"></hr>
        </div>
    )
}