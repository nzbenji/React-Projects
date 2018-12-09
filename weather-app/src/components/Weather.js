import React from 'react';

const Weather = props => {
    return (
        <div>
            { props.country && props.city && <p>
                Location: { props.city }, { props.country }
                </p>
            }
            { props.temp && <p>
                    Temperature: { props.temp }
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
        </div>
    )
}

export default Weather;