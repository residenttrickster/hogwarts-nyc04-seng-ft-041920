import React from 'react';

class HogDetail extends React.Component {

    render () {
        const { speciality, greased, weight, medal } = this.props
        return (
            <div>
                <h1>HogDetail</h1>
        <h3>{speciality}</h3>
        <h3>{greased}</h3>
        <h3>{weight}</h3>
        <h3>{medal}</h3>
                </div> 
        )
    }
}

export default HogDetail 