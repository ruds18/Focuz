import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../utils/FetchFromAPI';
import PlaylistCard from './PlaylistCard';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
const Feed = () => {
  // State Variables
  const [userInput, setUserInput] = useState("");
  const [playlistId, setPlaylistId] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const { promiseInProgress } = usePromiseTracker();
  const [open, setOpen] = useState(false);
  const [dupPlay, setDubPlay] = useState([])


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
    const id = split_video[1].slice(1, 35)
    setDubPlay((dupPlay)=>[...dupPlay, id])
    setPlaylistId((playlistId)=>[...playlistId , id]);
    addToDB(id);
  }
  
  


  //PlayList Data

  //   const getplaylistData = (playlistId)=>{
  //     if(playlistId != null ){
  //     FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data)=> setPlaylistInfo(data.meta)); 
  //    }
  //   }

  // const getData = async () => {
  //   await trackPromise(
  //     FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data) => { setPlaylistInfo(data); console.log(data.data) })
  //   )
  // }

  const addToDB = async(listId)=>{
    try{
      await trackPromise(
        axios.post(`http://localhost:8080/insert` , {info : listId})
      );
      console.log("Inside DB");
    }
    catch(error){
      console.log(error)
    }
  }

  const getData = async()=>{
    try{
      await trackPromise(axios.get('http://localhost:8080/read')).then((response)=>{
        console.log(response.data          );
        setPlaylistId(response.data)
      })
    }
    catch(error){
      console.log(error)
    }
    
  }

  useEffect(()=>{
     getData();
  },[dupPlay])



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
      <button onClick={()=>extractPlaylistId(userInput)}>Submit</button>

      {playlistId !== 0 ? (
  <div>
    {playlistId.map((pid, key) => (
      <div key={key}>
        <h3>Playlist Id: {pid.playListID}</h3>
        <br />
        <PlaylistCard playlistId={pid.playListID} />
      </div>
    ))}
  </div>
) : (
  <div>
    <h2>Enter YouTube playlist</h2>
  </div>
)}


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