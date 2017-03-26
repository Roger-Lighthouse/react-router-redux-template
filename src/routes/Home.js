import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Counter app</h1>
                <button onClick={() => this.props.dispatch(push('/counter'))}>Click to go to Counter</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Home)
