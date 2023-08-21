

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import Paper from '@mui/material/Paper';
import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';
import Chatform from './Chatform';


function App() {

  return (<>
        <div>
          <Paper   style={{ width: "100%",
      minHeight: "100vh",
    
      }}>
    <RecoilRoot>
    <Router> 
      <Appbar/> 
      <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/chatform' element={<Chatform />}/>
      </Routes>  
    </Router>
    </RecoilRoot>
    </Paper>
    </div>
  </>

  )
}

export default App;
