import React from 'react';
import Topbanar from '../Shared/TopBanar/Topbanar';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <Topbanar></Topbanar>
            {/* Quiestion */}
            <div className='container'>
                <div className=' mt-5'>
                    <h1>Authentication vs Authorization</h1>
                    <div className='d-flex row'>
                        <ul className='col-md-6 qsn'>
                            <li><h5>Authentication</h5></li>
                            <li>Authentication verifies who the user is.</li>
                            <li>It Works Through ID and Password</li>
                            <li>It is an identity.</li>

                        </ul>
                        <ul className='col-md-6 qsn'>
                            <li><h5>Authorization</h5></li>
                            <li>Authorization determines what resources a user can access.</li>
                            <li>Authorization Works through setting implement by Builder</li>
                            <li>Authorization always takes place after authentication.</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5'>
                    <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p> Firebase Realtime Database it is more secure access to the database directly from client-side code. it developed by sech an organization like google. </p>
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='mt-5'>
                    <h5>What other services does firebase provide other than authentication</h5>
                    <p>
                        <ul>
                            <li>Parse – Open Source Backend Platform;</li>
                            <li>Back4app – Parse Hosting Platform;</li>
                            <li>Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
                            <li>Backendless – Mobile Backend and API Services Platform;</li>
                            <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;</li>
                            <li>Pubnub – Real-time APIs and Global Messaging;</li>
                            <li>Kumulos – App Performance Management;</li>
                            <li>Game Sparks – Game Backend Platform;</li>
                            <li>Hoodie – Generic backend with a client API for Offline First applications;</li>
                            <li>Appwrite – Open-Source backend for Flutter developers</li>
                            <li>Deployd – Simple core library, with a modular API for your application;</li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;