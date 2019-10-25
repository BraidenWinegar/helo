import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'
import {withRouter} from 'react-router-dom'

const ComposedWithRouter = withRouter(Nav)

function App() {
  return (
    <div className="App">
      <ComposedWithRouter />
      {routes}
    </div>
  );
}


export default App;
