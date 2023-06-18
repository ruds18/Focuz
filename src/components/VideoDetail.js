import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { FetchFromAPI } from '../utils/FetchFromAPI';
import PlaylistCard from './PlaylistCard';
import { common } from '@mui/material/colors';

function VideoDetail() {
  const [videoDetails , setVideoDetails] = useState([]);
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const {id , playlistId} = useParams();
 

  const getData = async () => {
    await trackPromise(
      FetchFromAPI(`playlist?part=snippet&id=${playlistId}`).then((data) => { setPlaylistInfo(data.data);}),
      // FetchFromAPI(`video?id=${id}`).then((data)=> setVideoDetails(data))
    )
  }
 
  useEffect(()=>{
   getData();

    //  FetchFromAPI(`playlist?part=snippet&id=${finalId}`).then((data)=> setVideoDetails(data.data))
   } ,[]);

   console.log(videoDetails)


   
  
  return (
    <div style={{
        "display" :"flex",
        "flexDirection" : "row"
    }}>
    <div style={{
      "width" : "70%",
    }}> 
    <ReactPlayer style={
      {
        "border-radius": "1rem !important;",
  "width":" auto !important;",
  "height": "70% !important"
      }
    } url={`https://www.youtube.com/watch?v=${id}`} className="yt"  controls/>
        {/* <h1>{videoDetails.title}</h1> */}
    </div>

    <div style={{
      "width" : "50%",
      "padding" : "0",
      "margin": "0",
      "display" :"flex",
      "display" : "column"
    }}>

     {playlistInfo.map((item, idx)=>(
      <Link to={`/video/${playlistInfo[idx].videoId}/${playlistId}`}>
      <img src={item.thumbnail[2].url} alt="thumbnail image" />
      </Link>
     ))}

    </div>
       
    </div>
  )
}

export default VideoDetail