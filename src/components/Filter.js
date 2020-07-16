import React from 'react';

class Filter extends React.Component {
    render () {
        return (
            <div><h1>Filter</h1>
            <button onClick={() => this.props.sortHogs("greased")}>Grease</button>
            <button onClick={() => this.props.sortHogs("name")}>Name</button>
            <button onClick={() => this.props.sortHogs("weight")}>Weight</button>
            </div>
        )
    }
}

export default Filter 