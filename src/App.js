import { useEffect, useState } from 'react';
import './App.css';
// 9f90c2df98144f14821fe8c1ae62c016
import Login from './Components/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './Components/Spotify';
import Player from './Components/Player';
import { useStateValue } from './Context/StateProvider';

const spotify = new SpotifyWebApi();

function App() {

  const [{user},dispatch] = useStateValue()
  const [token,setToken] = useState(null);
  const [userId,setUserId] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl()["access_token"];
    if(hash){
      console.log(hash);
      spotify.setAccessToken(hash);
      setToken(hash);
      spotify.getMe(hash).then((response)=>{
         console.log(response);

        setUserId(response.id);
        dispatch({
          type : "SET_USER",
          user : response
        })
      });
      // console.log(player);
      spotify.getUserPlaylists(userId).then((Playlists) => {
        console.log(Playlists);
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : Playlists
        })
      })

      spotify.getPlaylist("2Q7pZmw3fJggMAXh53b5kU").then((item)=>{
        console.log(item);
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : item
        })
      })
    }
  },[])

  return (
    <div className='app'>
      {token ? <Player spotify = {spotify} /> : <Login/>}
    </div>
  );
}

export default App;
