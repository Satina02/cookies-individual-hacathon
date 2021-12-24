import React from "react";
import { useAuth } from "../../contexts/authContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./Login.css";

const Login = () => {
    
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();
  const auth = getAuth();
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return (
    <div>
    <div className="login-page">
        <div className='login-inner_left'>
        <section className="login">
        <h4 style={{marginBottom:"20px"}}> Sign Up </h4>
        <div className="login-container">
            <label className="login-label">Email</label>
            <input className="login-input" 
                   type="text" autoFocus 
                   required 
                   placeholder='name@domain.com'
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
            />
            <p className="error-msg">{emailError}</p>

            <label className="login-label">Password</label>

            <input className="login-input" 
                   type="password" autoFocus 
                   required 
                   placeholder='at least 8 characters'
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} 
            />
            <p className="error-msg">{passwordError}</p>


            <div className="btn-container">
                {hasAccount ? (
                    <>
                        <button className="login-btn" onClick={handleLogin}
                             >Sign In
                        </button>
                        <br />
                        <span className="login-span" 
                        onClick={()=> sendPasswordResetEmail()}
                        style={{cursor:"pointer", color:"blue", textAlign:"center"}}
                        >
                          Forget your password?
                        </span>
                        <p className="login-text">Don't have an account? 
                            <span className="login-span" 
                            style={{cursor:"pointer", color:"blue"}}
                            onClick={()=> setHasAccount(!hasAccount)}>
                                Sign Up
                            </span> 
                        </p>
                    </>
                ): (
                    <>
                    <button className="login-btn" 
                    onClick={handleSignUp}
                    >Sign Up</button>
                    <p className="login-text">Have an account? 
                        <span className="login-span" 
                        onClick={()=> setHasAccount(!hasAccount)}
                        style={{cursor:"pointer", color:"blue"}}
                        >
                          Sign In
                        </span> 
                    </p>
                    </>
                )} 
            </div>
        </div>
    </section>
    <div style={{marginBottom:"30px", fontSize:"16px", borderBottom:"1px solid gray", paddingBottom:"10px"}}>Sign in us</div>
        <div className='sign-in-us'>
            <button className='register-facebook'>FACEBOOK</button>
            <button className='register-google'  
            // onClick={()=> login()}
            >GOOGLE+</button>
            <button className='register-twitter'>TWITTER</button>
        </div>
        </div>
        <div className='login-inner_right'>
            <img style={{width:"70%"}} src="https://www.pngitem.com/pimgs/m/623-6230347_registration-online-vector-png-transparent-png.png" alt="" />
        </div>
    </div>
</div>
  );
};

export default Login;
