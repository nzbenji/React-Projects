import React from 'react';

const Weather = props => {
    return (
        <div>
            { props.country && props.city && <p>
                Location: { props.city }, { props.country }
                </p>
            }
            { props.tempMin && <p>
                    Low: { props.tempMin }
                </p>
            }
            { props.tempMin && <p>
                High: { props.tempMax }
            </p>
        }
            { props.conditions && <p>
                    Conditions: { props.conditions }
                </p>}
            {
                props.error && <p>
                    { props.error }
                </p>
            }
            <img className="icon" src={`http://openweathermap.org/img/w/${props.conditions}${'.png'}`}/>
        </div>
    )
}

export default Weather;