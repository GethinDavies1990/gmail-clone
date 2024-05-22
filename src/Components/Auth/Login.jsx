import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import whailLogo from "../../whail.png";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__card'>
          <img src={whailLogo} alt='' className='whailLogo' />
          <p className='login__button' onClick={signIn}>
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
