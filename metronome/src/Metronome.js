import React from 'react';
import './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends React.Component {
        state = {
            isPlaying: false,
            count: 0,
            bpm: 100,
            beatsPerMeas: 4
    }

    clickOne = new Audio(click1)
    clickTwo = new Audio(click2)

    togglePlayStop = _ => {
        //Stop timer button and render isPlaying state to false
        if(this.state.isPlaying){
            clearInterval(this.timer);
            this.setState({
                isPlaying: false
            })
        } else {
            //start timer button and set a timer depending on bpm value
            this.timer = setInterval(
                this.playClick, (60 / this.state.bpm ) * 1000
            );
            this.setState({
                count: 0, //tracks which beat we're on
                isPlaying: true
            })
        }
    }

    playClick = _ => {
        this.state.count & this.state.beatsPerMeas === 0 ? this.clickTwo.play() : this.clickOne.play();

        this.setState({
            count: (this.state.count + 1) % this.state.beatsPerMeas
        })
    }
    
    handleSlider = event => {
        const bpm = event.target.value
        this.setState({ bpm })
    }

    render() {
        const { isPlaying, bpm } = this.state

        return (
            <div className="container">
                <div className="bpm__slider">
                    <div>{bpm} BPM</div>
                    <input 
                    type="range" 
                    min="60" 
                    max="240" 
                    value={bpm}
                    onChange={ this.handleSlider }
                    />
                </div>
                <button onClick={ this.togglePlayStop }> 
                { isPlaying ? 'Stop' : 'Start' } 
                </button>
            </div>
        )
    }
}

export default Metronome
