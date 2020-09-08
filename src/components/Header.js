import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='amazon logo' className='header__logo' />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
      </div>

      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionOne'>
            Hello Guest
          </span>
          <span className='header__optionOne'>
            Sign in
          </span>
        </div>

        <div className='header__option'>
          <span className='header__optionTwo'>
            Return
          </span>
          <span className='header__optionTwo'>
            & Orders
          </span>
        </div>

        <div className='header__option'>
          <span className='header__optionThree'>
            Your
          </span>
          <span className='header__optionThree'>
            Prime
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
