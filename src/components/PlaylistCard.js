import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { Link } from 'react-router-dom';


function PlaylistCard({playlistId}) {
  console.log(playlistId);
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const getData = async () => {
    await trackPromise(
      FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data) => { setPlaylistInfo(data); console.log(data.data) })
    )
  }
    useEffect(() => {
    if (playlistId != null) {
      getData();
    }
  }, [playlistId])
  console.log(playlistInfo);
  if (!playlistInfo || !playlistInfo.data || !playlistInfo.data[0] || !playlistInfo.data[0].thumbnail) {
    return null; // Return null or a placeholder component if the necessary data is not available
  }
  // useEffect(() => {
  //   if (playlistId != null) {
  //     getData();
  //   }
  // }, [playlistId])

  console.log(playlistInfo)
  
  return (

    <div style={{
        "border" : "2px solid black",
        "padding" : "0.4rem",
        "width" :"20vw",
        "paddingTop":"1rem",
        "borderRadius" : "1rem",
        "margin" :"auto"
    }}>
     <img  src={playlistInfo.data[0].thumbnail[2].url}/>
    <Link  to={`/video/${playlistInfo.data[0].videoId}/${playlistId}` }> <h3>{playlistInfo.meta.title}</h3> </Link>   
      
 

     <div style={{
        "margin" :"0 , 2rem",
        "display": "flex",
        "justifyContent" : "space-between"
     }}>
         
        <p>{playlistInfo.meta.viewCount}</p>
        <p>Videos - {playlistInfo.meta.videoCount}</p>
     </div>

    </div>
  )
}

export default PlaylistCard

