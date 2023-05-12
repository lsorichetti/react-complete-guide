import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';

import { useSelector } from 'react-redux';

import './index.css';

function App() {

  const authData = useSelector( state => state.auth);

  const {isAuthenticated} = authData;

  return (
    <Fragment>
      {!isAuthenticated && <Auth></Auth>}
      {isAuthenticated &&
      <Fragment>
        <Header></Header>
        <Counter />
      </Fragment>        
      }
    </Fragment>
    
  );
}

export default App;
