import React from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Home from './routes/Home'
import Counter from './routes/Counter'
import { store, history } from './store'
import './App.css';


const App = (props) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/counter' component={Counter}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
