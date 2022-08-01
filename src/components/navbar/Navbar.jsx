import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import { useState } from "react"
import "./Navbar.scss"


const Navbar = () => {
    const [isScrolled, setIsScroled] = useState(false)
    
    window.onscroll = () => {
        setIsScroled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null)
    }


    return (
        <div className={ isScrolled? "navbar scrolled": "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />
                    <span>Homepage</span>
                    <span>series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search  className="icons"/>
                    <span>KID</span>
                    <Notifications className="icons"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icons" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>  
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
