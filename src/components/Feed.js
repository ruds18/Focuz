import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../utils/FetchFromAPI';
import PlaylistCard from './PlaylistCard';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
const Feed = () => {
  // State Variables
  const [userInput, setUserInput] = useState("");
  const [playlistId, setPlaylistId] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  // Functions

  // PlayList ID
  const extractPlaylistId = (userInput) => {
    const split_video = userInput.split('list');
    setPlaylistId((playlistId)=>[...playlistId , split_video[1].slice(1, 35)]);

  }
  console.log(playlistId)
  


  //PlayList Data

  //   const getplaylistData = (playlistId)=>{
  //     if(playlistId != null ){
  //     FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data)=> setPlaylistInfo(data.meta)); 
  //    }
  //   }

  const getData = async () => {
    await trackPromise(
      FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data) => { setPlaylistInfo(data); console.log(data.data) })
    )
  }



  // useEffect(() => {
  //   if (playlistId != null) {
  //     getData();
  //   }
  // }, [playlistId])





  return (
    <div>

      <input onChange={(e) => setUserInput(e.target.value)} style={{
        "borderRadius": "0.5rem",
        "borderBottom": "2px solid black",
        "width": "50%",
        padding: "0.5rem"
      }} />
      <button onClick={() => extractPlaylistId(userInput)}>Submit</button>

      {playlistId !== 0 ? <div>
        <h3>Playlist Id : {playlistId}</h3>
        <br />


        {playlistId.map((pid,key)=>(
          <PlaylistCard key={key} playlistId={pid}/>
        ))}


      </div> : <div>
        <h2>Enter youtube playlist</h2>
      </div>}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={promiseInProgress}
        onClick={handleClose}
      >
        {promiseInProgress ? <div>
          <CircularProgress color="inherit" />

        </div> : ""}
      </Backdrop>

    </div>
  )
}

export default Feed