import React, { useState } from 'react';
import { FaPlay, FaDownload } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import demoPrincipal from '../assets/audios/demoPrincipal.mp3';

const audioData = [
    {
        name: "Demo Principal",
        url: demoPrincipal
    },
    {
        name: "Demo Demonstrativo de Política",
        url: "/path/to/demo-politica.mp3"
    },
    {
        name: "Demo Propaganda para rádio",
        url: "/path/to/demo-radio.mp3"
    },
    {
        name: "Demo propagandas para televisão",
        url: "/path/to/demo-televisao.mp3"
    },
    {
        name: "Demo escutas telefônicas",
        url: "/path/to/demo-escutas.mp3"
    }
];

const AudioBox = () => {
    const [currentAudioUrl, setCurrentAudioUrl] = useState("");

    const handlePlay = (url) => {
        setCurrentAudioUrl(url);
    };

    return (
        <div className="audioBox">
            <ReactPlayer
                url={currentAudioUrl}
                playing={currentAudioUrl !== ""}
                controls={true}
                width="100%"
                height="50px"
            />
            {audioData.map((audio, index) => (
                <div key={index} className="audioItem">
                    <button onClick={() => handlePlay(audio.url)}>
                        <FaPlay size={20} color="white" />
                    </button>
                    <h3>{audio.name}</h3>
                    <a href={audio.url} download>
                        <FaDownload size={20} color="white" />
                    </a>
                </div>
                
            ))}
        </div>
    );
};

export default AudioBox;
