import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateValue } from '../Context/StateProvider';

function Header({ spotify }) {

    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            {/* Header */}
            <div className='header_left'>
                <SearchIcon />
                <input placeholder='Search for artists, songs or albums' type='text' />
            </div>
            <div className='header_right'>
                <Avatar className="avatar" src={user?.images[0]?.url} alt="" />
                <p>{user ? user.display_name : ""}</p>
            </div>
        </div>
        
    )
}

export default Header