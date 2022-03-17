import React from 'react'
import './SongRow.css'
function SongRow({song}) {
  return (
    <div className='song_info'>
        <img className="song_image" src={song?.album?.images[0].url} alt='' />
        
        <div className='song_details'>
            <h1>{song.name}</h1>
            <p>{song.artists.map((item) => {
                return item.name
            }).join(", ")}
            {song.album.name}</p>
        </div>
    </div>
  )
}

export default SongRow