import { Zoom } from '@stahl.luke/react-reveal';
import React from 'react'
import './Login.css';
import { loginUrl } from './Spotify';
function Login() {
    return (
        <div className='login'>
            <Zoom>
                <img src="https://mobileit.ie/wp-content/uploads/2020/04/Spotify-4.png"></img>
                <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </Zoom>
        </div>
    )
}

export default Login