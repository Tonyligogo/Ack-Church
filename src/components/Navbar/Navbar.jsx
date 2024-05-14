import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const[active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])

  return (
        <div className={active ? "navContainer active" : "navContainer"}>
            <nav>
                <Link to="/" className="link">
                    <h3>St.Peter&apos;s ACK Church</h3>
                </Link>
                <div className="links">
                    <ul className="navLinks">
                        <li>Home</li>
                        <li>About</li>
                        <li>Sermons</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default Navbar