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
import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src='/static/img/fb.png' alt='facebook image' />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__middle'>
        <div className='header__option'>
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
          <Avatar />
          <h4>Alex Suarez</h4>
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
