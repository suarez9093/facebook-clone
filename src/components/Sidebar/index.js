import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StoreIcon from '@material-ui/icons/Store';
import TodayIcon from '@material-ui/icons/Today';
import React, { useContext } from 'react';
import { context } from '../../context/context';
import helpers from '../../helpers/functions';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
function Sidebar() {
  const { user } = useContext(context);
  console.log('user sidebar', user.photoURL);
  return (
    <div className='sidebar'>
      <SidebarRow
        title={helpers.capitalizeWord(user.displayName)}
        src={user.photoURL}
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
