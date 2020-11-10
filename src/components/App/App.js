// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from '../home/home'

import About from '../about/about'
import Chat from '../chat/chat'


function App() {
    return (
      <Switch>
      	<Route path='/' exact component={Home} />
      	<Route path='/about' exact component={About} />
      	<Route path='/chat' exact component={Chat} />
      </Switch>
    );
}

export default App;