import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);



    useEffect(() => {
        const error = googleError || githubError;
        if (error) {
            switch (error?.code) {
                case "auth/popup-closed-by-user":
                    toast("Login Cancel by user");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [googleError, githubError])
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (googleUser || githubUser) {
            navigate(from);
        }
    }, [googleUser || githubUser]);


    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-4'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            <div>
                <button className='btn btn-info login-btn text-light fs-5 fw-bold' onClick={() => signInWithGoogle()}>Google Sign In</button>
                <button className='btn btn-info login-btn text-light fs-5 fw-bold' onClick={() => signInWithGithub()}>Github Sign In</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;