import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFastForward,
    faFastBackward,
} from '@fortawesome/free-solid-svg-icons';


import './Home.css'

import lotus from '../../assets/cropped-lotus.svg';

import canoe from '../../assets/APP/camp-canoe.mp4'
import fire from '../../assets/APP/camp-fire.mp4'
import rain from '../../assets/APP/camp-rain.mp4'
import river from '../../assets/APP/hike-river.mp4'
import sea from '../../assets/APP/sea-day.mp4'
import dusk from '../../assets/APP/sea-dusk.mp4'
import storm from '../../assets/APP/sea-rain.mp4'
import stream from '../../assets/APP/stream.mp4'


import Header from '../../components/Header/Header'
import VolumeControl from '../../components/VolumeControl/VolumeControl'


const Home = (props) => {
    const videoList = [canoe, dusk, storm, fire, rain, river, sea, stream];
    const [videoIndex, setVideoIndex] = useState(0);

    const unMute = (videoId) => {
        const videoPlayer = document.getElementById(videoId);

        videoPlayer.muted = false;
    }

    /*
        const playVideo = (thisVideoId, nextVideoId) => {
            const thisPlayer = document.getElementById(thisVideoId);
            console.log(thisPlayer.duration - thisPlayer.currentTime)
            const differnce = thisPlayer.duration - thisPlayer.currentTime
            if (differnce < 0.5) {
                thisPlayer.volume = 0
                const videoPlayer = document.getElementById(nextVideoId);
                videoPlayer.play();
                videoPlayer.volume = 1 - differnce
            }
        }
    
        const switchVideo = (thisVideoId, nextVideoId) => {
            const thisPlayer = document.getElementById(thisVideoId);
            const videoPlayer = document.getElementById(nextVideoId);
            thisPlayer.style.opacity = 0;
            videoPlayer.style.opacity = 1;
        }
    */
    const changeVideo = (direction) => {
        const size = videoList.length
        console.log(size)

        setVideoIndex(prev => {
            const videoIndex = (prev + direction) % size
            return videoIndex
        })
    }

    return (
        <>
            <Header
                logo={lotus}
                show={false}
                faded={true}
            />

            <div className="controlArea">
                <FontAwesomeIcon
                    className="next left"
                    icon={faFastBackward}
                    size="3x"
                    color="#FFFFFF"
                    onClick={() => { changeVideo(-1) }}
                />

                <VolumeControl
                    controlId={"video-" + videoIndex}
                />


                <FontAwesomeIcon
                    className="next right"
                    icon={faFastForward}
                    size="3x"
                    color="#FFFFFF"
                    onClick={() => { changeVideo(1) }}
                />
            </div>


            {videoIndex === 0 &&
                <video className="fullVideo" id={"video-" + videoIndex} autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 1 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 2 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 3 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 4 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 5 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 6 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 7 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            {videoIndex === 8 &&
                <video className="fullVideo" id={"video-" + videoIndex} width="320" height="240" autoPlay muted loop
                    onTimeUpdate={(event) => { unMute("video-" + videoIndex) }}
                >
                    <source src={videoList[videoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            }
            <p>
                Createtd today.
            </p>

        </>
    )
}

export default Home
