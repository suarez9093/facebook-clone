import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import StorefrontIcon from '@material-ui/icons/Storefront';
import React, { useContext } from 'react';
import { context } from '../../context/context';
import './Header.css';
function Header() {
  const { user } = useContext(context);
  return (
    <header className='header'>
      <div className='header__left'>
        <img src='/static/img/fb.png' alt='facebook' />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header__middle'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <OndemandVideoIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <GroupIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SportsEsportsIcon fontSize='large' />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          {/* <h4>{helpers.capitalizeWord(user.displayName)}</h4> */}
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
