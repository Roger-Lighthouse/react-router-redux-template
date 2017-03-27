import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Counter app</h1>
                <Link to='/counter'>Click to go to Counter</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Home)
