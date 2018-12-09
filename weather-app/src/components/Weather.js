import React from 'react';
import '../css/Weather.css';

const Weather = props => {
    return (
        <div className="container">
        <img className="icon" src={`http://openweathermap.org/img/w/${props.icon}${'.png'}`}/>
        { props.conditions && <p className="icon conditions">
                {props.conditions}</p>}
        <div className="weather">
            
            { props.country && props.city && <p className="details">
                Location: { props.city }, { props.country }
                </p>
            }
            { props.tempMin && <p className="details">
                    Low: { props.tempMin }
                </p>
            }
            { props.tempMin && <p className="details">
                High: { props.tempMax }
            </p>
        }
            
            {
                props.error && <p className="details">
                    { props.error }
                </p>
            }
        </div>
            
        </div>
    )
}

export default Weather;