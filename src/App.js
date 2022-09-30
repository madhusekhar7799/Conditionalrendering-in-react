import { useState } from 'react';
import './App.css';

import LoggedIn from './Components/LoggedIn';
import NotLoggedIn from './Components/NotLoggedIn';


// import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';

function App() {
  // let isAdult = true;
  // let isVisible = true

  const [loggedIn, setloggedIn] = useState(false)
  // let loggedIn = true;

  return (
    // <>
    // {
    //   isAdult ? (<><h1>Iam true</h1></>) : (<><h1>Iam false</h1></>)
    // }
    // </>
    // {/* <>
    // {
    //   isVisible ? <Component1/> : <Component2/>
    // }
    // </> */}

    <>
      {
        loggedIn ? <LoggedIn /> : <NotLoggedIn loggedIn={loggedIn} setloggedIn={setloggedIn} />
        // loggedIn && <LoggedIn/>
      }
    </>

  );
}

export default App;
