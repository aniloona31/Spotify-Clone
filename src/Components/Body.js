import React from 'react'
import './Body.css'
import Header from './Header'
import { useStateValue } from '../Context/StateProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'
function Body({spotify}) {

  const [{discover_weekly},dispatch] = useStateValue();

  return (
    <div className='body'>
      <div className='header'>
        <Header spotify={spotify}/>
      </div>
      <div className='body_info'>
        <img src={discover_weekly?.images[0]?.url} alt=''/>
        <div className='body_info_text'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.discription}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icon'>
          <PlayCircleFilledIcon className='body_shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) =>{
          console.log(item);
          return (
            <SongRow key={item.track.id} song={item.track}/>
          )
        })}
      </div>
    </div>
  )
}

export default Body