import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../utils/FetchFromAPI';

const Feed = () => {
  // State Variables
  const [userInput, setUserInput] = useState("");
  const [playlistId, setPlaylistId] = useState();
  const [playlistInfo, setPlaylistInfo] = useState([])

  console.log(playlistId);

  // Functions

  // PlayList ID
  const extractPlaylistId = (userInput) => {
    const split_video = userInput.split('list');
    setPlaylistId(split_video[1].slice(1, 35));

  }

  //PlayList Data

  //   const getplaylistData = (playlistId)=>{
  //     if(playlistId != null ){
  //     FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data)=> setPlaylistInfo(data.meta)); 
  //    }
  //   }


  useEffect(() => {
    if (playlistId != null) {
      FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data) => console.log(data));
    }
  }, [playlistId])


  return (
    <div style={{
      "margin": "1rem",
      "border": "2px solid black",
      "padding": "1rem",
      "borderRadius": "1rem",
      "height": "50vh"
    }}>

      <input onChange={(e) => setUserInput(e.target.value)} style={{
        "borderRadius": "0.5rem",
        "borderBottom": "2px solid black",
        "width": "50%",
        padding: "0.5rem"
      }} />
      <button onClick={() => extractPlaylistId(userInput)}>Submit</button>

      <h3>Playlist Id : {playlistId}</h3>
      <h3>Playlist Name :  {playlistInfo.title}</h3>



    </div>
  )
}

export default Feed