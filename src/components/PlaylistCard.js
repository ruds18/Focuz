import React from 'react'

function PlaylistCard({playlistInfo}) {
  console.log(playlistInfo);
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
     <h3>{playlistInfo.meta.title}</h3>

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