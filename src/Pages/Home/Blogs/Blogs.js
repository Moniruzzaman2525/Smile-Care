import React from 'react';

const Blogs = () => {
    return (
        <div className='container ax-auto'>
            <div>
                <h2>Difference between authorization and authentication?</h2>
                <p><span className='fw-bold'>Authentication & authorization:</span> Authentication is the process of verifying what the user claims.
                    This is the first step in any security process.
                    And system security approval is the process of allowing
                    the user to access a specific organization or function.
                    The term is often used interchangeably with access control
                    or client privileges
                </p>
                <p><span className='fw-bold'>Authentication vs authorization:</span>
                    Both terms are often the same Used in conjunction with another,
                    They have completely different drones and meanings.
                    Although both concepts are critical to the web family
                    infrastructure,Especially when it comes to granting access to a
                    system, security is the key to understanding every word.Although
                    most of us confuse one word with another, it is important to
                    understand the basic differences between them which is actually
                    very easy.If authentication is, you are approving what you
                    cannot access and change in simple terms,Authentication
                    determines whether anyone claims to be who they are. Approval,
                    on the other hand, determines his right to access resources
                </p>
            </div>
            <div>
                <h2>Why are you using firebase?
                    What other options do you have to implement authentication?</h2>
                <p>Firebase provides authentication backend services,
                    an easy-to-use SDK,
                    and a built-in UI library for authenticating users
                    in your app.It supports authentication using passwords,
                    phone numbers and popular federated identity providers
                    like Google, Facebook, Twitter, etc.Firebase gives you
                    functionality like analytics, database, messaging and
                    crash reporting so you can move quickly and focus on your
                    users.Firebase is built into the Google infrastructure and
                    scaled automatically, even for the largest apps.If you want
                    to use Firebase in the Expo Go app with managed workflow,
                    we recommend using the Firebase JS SDK.It supports
                    authentication, firestore and realtime databases,
                    storage and response native functions.It supports
                    authentication, firestore and realtime databases,
                    storage and response native functions.Other modules
                    such as Analytics are not supported by the Firebase
                    JS SDK, but you can use expo-firebase-analytics for this.</p>
            </div>
            <div>
                <h2>What other services does firebase provide other than authentication ?</h2>
                <p><span className='fw-bold'>Firebase provide other then authentication :
                </span> Firebase is a set of tools offered by Google to create
                    excellent scalable applications in the cloud.
                    It is a powerful service that helps you build
                    applications quickly without having to completely
                    redesign components or modules.A service (BaaS) market
                    continues to innovate and dominate the business world
                    here are many services which Firebase provides, Most useful of them are:
                    <ul className='text-start' >
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Predictions.</li>
                        <li>Cloud Messaging</li>
                    </ul></p>
            </div>
        </div>
    );
};

export default Blogs;