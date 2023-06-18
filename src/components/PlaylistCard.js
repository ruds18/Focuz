import React from 'react'

function PlaylistCard({playlistInfo}) {
  console.log(playlistInfo);
  if (!playlistInfo || !playlistInfo.data || !playlistInfo.data[0] || !playlistInfo.data[0].thumbnail) {
    return null; // Return null or a placeholder component if the necessary data is not available
  }
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

// import React from 'react';

// function PlaylistCard({ playlistInfo }) {
//   console.log(playlistInfo);



//   const thumbnailUrl = playlistInfo.data[0].thumbnail[2].url;
//   const title = playlistInfo.meta.title;
//   const viewCount = playlistInfo.meta.viewCount;
//   const videoCount = playlistInfo.meta.videoCount;

//   return (
//     <div style={{
//       "border": "2px solid black",
//       "padding": "0.4rem",
//       "width": "20vw",
//       "paddingTop": "1rem",
//       "borderRadius": "1rem",
//       "margin": "auto"
//     }}>

//       <img src={thumbnailUrl} alt="Thumbnail" />
//       <h3>{title}</h3>

//       <div style={{
//         "margin": "0 , 2rem",
//         "display": "flex",
//         "justifyContent": "space-between"
//       }}>
//         <p>{viewCount}</p>
//         <p>Videos - {videoCount}</p>
//       </div>

//     </div>
//   );
// }

// export default PlaylistCard;
