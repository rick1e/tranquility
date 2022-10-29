import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faVolumeXmark,
    faVolumeOff,
    faVolumeLow,
    faVolumeHigh
} from '@fortawesome/free-solid-svg-icons';


import Slider from '@mui/material/Slider';

import './VolumeControl.css'

const VolumeControl = (props) => {


    const [volume, setVolume] = useState(0.5)
    const [icon, setIcon] = useState(faVolumeLow)
    const [mute, setMute] = useState(false)

    const setView = (volume, isMute) => {
        setVideo(volume, isMute)
        setVolumeIcon(volume, isMute)
    }

    const setVideo = (volume, isMute) => {
        const videoPlayer = document.getElementById(props.controlId);
        videoPlayer.muted = isMute;
        videoPlayer.volume = volume
    }

    const setVolumeIcon = (volume, isMute) => {
        if (isMute) {
            setIcon(faVolumeXmark)
            return
        }
        if (volume === "0") {
            setIcon(faVolumeOff)
            return
        }
        if (volume > 0.5) {
            setIcon(faVolumeHigh)
            return
        }

        setIcon(faVolumeLow)
    }

    const onChange = (event) => {
        setVolume(event.target.value)
        setView(event.target.value, mute)
    }

    const toggleMute = () => {
        console.log("toggle Mute")
        setMute(prevState => {
            const newState = !prevState

            setView(volume, newState)
            return newState
        })

    }

    return (
        <div className="volumeContainer">
            <FontAwesomeIcon
                icon={icon}
                size="5x"
                color="#FFFFFF"
                onClick={toggleMute}
            />
            <Slider
                min={0}
                step={0.01}
                max={1}
                style={{
                    color: "#3EB9FF",
                }}
                onChange={onChange}
                value={volume}
            />

        </div>
    )

}

export default VolumeControl