import React from 'react';
import './Metronome.css';

class Metronome extends React.Component {
        state = {
            isPlaying: false,
            count: 0,
            bpm: 100,
            beatsPerMeas: 4
    }

    render() {
        const { isPlaying, bpm } = this.state

        return (
            <div className="container">
                <div className="bpm__slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="60" max="240" value={bpm} />
                </div>
                <button> { isPlaying ? 'Stop' : 'Start' } </button>
            </div>
        )
    }
}

export default Metronome
