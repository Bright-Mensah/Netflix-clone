import React from 'react';
import NetflixLogo from '../Images/netflixlogo.jpg';
import NetflixUserAvatar from '../Images/Netflix-avatar.png';

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><img className='logo' src={NetflixLogo} alt="netflix-logo" /></li>
                <li><img className='userAvatar' src={NetflixUserAvatar} alt="netflix-user avatar" /></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar