import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import { async } from '@firebase/util';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: ""
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        const displayName = e.target.name.value;
        e.preventDefault();
        await createUserWithEmailAndPassword(userInfo.email, userInfo.password);

        await updateProfile({ displayName });
    }
    if (user) {
        navigate('/home')
    }

    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [error]);





    if (loading || updating) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='form-container'>
                <div className='text-center fs-4 text-info'>SIGN UP</div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Your Name' id="" />
                    <input type="text" placeholder='email' id="" onChange={handleEmailChange} />
                    {errors.email && <p>{errors.email}</p>}
                    <input type="password" placeholder='password' id="" onChange={handlePassChange} />
                    {errors.password && <p>{errors.password}</p>}

                    {/* <input type="submit" value="Register" /> */}
                    <button className='login-btn btn-info text-light fs-5 mb-2'>Sing up</button>
                    {/* {signInError && <p>{signInError.message}</p>} */}
                    <ToastContainer></ToastContainer>
                    <p>Don't have an account? <Link to="/login">Login</Link></p>
                </form>
                <SocialLogin></SocialLogin>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Signup;

