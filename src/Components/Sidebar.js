import React, { useContext } from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from '../Context/StateProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function Sidebar() {

  const [{ playlists }, dispatch] = useStateValue()

  return (
    <div className='sidebar'>
      <img className="sidebar_img" src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong>PLAYLIST</strong>
      <SidebarOption Icon={LibraryAddIcon} option="Create Playlist" />
      <SidebarOption Icon={FavoriteIcon} option="Liked Songs" />
      <hr />
      {playlists ?
        playlists.map((item) => {
          console.log(item);
          return (
            <SidebarOption option={item.name} />
          )
        })
        : <></>}
    </div>
  )
}

export default Sidebar