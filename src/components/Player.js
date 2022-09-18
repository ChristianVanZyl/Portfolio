import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Player = () => {
    return(
<div>
<LiteYouTubeEmbed
       id="zM6f_nyJnM8" 
       adNetwork={true} 
       poster="hqdefault" 
       title="Play Therapy" 
       noCookie={true} 
    />
</div>

)
}
export default Player;


