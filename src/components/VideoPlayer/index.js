import React from 'react';
import YouTube from "react-youtube";
import {VideoWrapper} from "./Video.elements";

class YoutubePlayer extends React.Component {

    Video0nReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    VideoStateChange(event){
        const player = event.target
        console.log(player.getCurrentTime())
    }

    render() {
        const opts = {
            height: '360',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };
        const {videoId} = this.props
        return (
            <VideoWrapper>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this.Video0nReady}
                />
            </VideoWrapper>
        );
    }
}
export default YoutubePlayer;
