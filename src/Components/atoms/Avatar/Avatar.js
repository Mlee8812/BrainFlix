import React from 'react';
import "./avatar.scss";

import MohanAvatar from '../../../Assets/Images/Mohan-muruge.jpg'

function Avatar() {
    return (
        <img className="avatar" src={MohanAvatar} alt="profile avatar" />

    )
}

export default Avatar