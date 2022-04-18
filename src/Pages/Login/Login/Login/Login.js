import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: ""
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid Email!!" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }
    const handlePassChange = (e) => {
        const passwrodRegex = /.{6,}$/;
        const validPass = passwrodRegex.test(e.target.value)
        if (validPass) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Minium 6 characters!!" })
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        if (signInError) {
            switch (signInError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided")
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    break;
            }
        }
    }, [signInError])




    const resetPassword = async () => {
        const email = userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    if (loading || sending) {
        return <Loading></Loading>
    }
    return (
        <div className='form-container'>
            <div>LOGIN</div>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='email' id="" onChange={handleEmailChange} />
                {errors.email && <p>{errors.email}</p>}
                <input type="password" placeholder='password' id="" onChange={handlePassChange} />
                {errors.password && <p>{errors.password}</p>}
                <button className='login-btn'>Login</button>
                {/* {signInError && <p>{signInError.message}</p>} */}
                <ToastContainer></ToastContainer>
                <p>Forget Password <button type="button" class="btn btn-link" onClick={resetPassword}>Rest Password</button></p>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;