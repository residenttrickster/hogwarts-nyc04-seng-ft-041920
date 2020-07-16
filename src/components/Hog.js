import React from 'react';
import HogDetail from './HogDetail';

class Hog extends React.Component {

    state = {
        onClick: false
    }

    handleClick = () => {
        this.setState (prevState => {
            return {
                onClick: !prevState.onClick }
            }
            )}

        

    render () {

        const { name, image, speciality, greased, weight, medal } = this.props
        const hogRender = this.state.onClick === true ?  <HogDetail speciality={speciality} greased={greased} weight={weight} medal={medal} /> : <div><h1>{name}</h1> <img src={image} alt={name} onClick={this.handleClick} /> </div>
        return (
        <div>
            {hogRender}
            </div>
        )
}

}

export default Hog


