import { useRef, useState } from "react";
import "./register.scss";

function Register() {
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef= useRef()
    
    const handleEmail = (e) => {
           setEmail(emailRef.current.value) 
    }
    const handleSubmit = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="logInButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email? 
        (<div className="input">
        <input type="Email" placeholder="Email Address"  ref={emailRef} />
        <button className="registerButton" onClick={handleEmail}>Get Started</button>
        </div>):
        (<form className="input">
        <input type="password" placeholder="enter your password"  ref={passwordRef} />
        <button className="registerButton" onClick={handleSubmit}>Start</button>
        </form>)}
        
      </div>
    </div>
  );
}

export default Register;
