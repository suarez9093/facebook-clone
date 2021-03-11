import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StoreIcon from '@material-ui/icons/Store';
import TodayIcon from '@material-ui/icons/Today';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        title='Alex Suarez'
        src={
          'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
        }
      />
      <SidebarRow title='Friends' Icon={PeopleAltIcon} />
      <SidebarRow title='Marketplace' Icon={StoreIcon} />
      <SidebarRow title='Watch' Icon={PlayCircleOutlineIcon} />
      <SidebarRow title='Events' Icon={TodayIcon} />
      <SidebarRow title='Memories' Icon={QueryBuilderIcon} />
      <SidebarRow title='Saved' Icon={BookmarkIcon} />
      <SidebarRow title='See more' Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
