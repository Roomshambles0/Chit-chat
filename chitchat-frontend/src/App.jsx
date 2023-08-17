
import { useState } from 'react'
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

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Appbar from './Appbar';
import Signup from './Signup';
import Signin from './Signin';



function App() {

  return (<>
        <div style={{backgroundColor:"black"}}>
          <Paper   style={{ width: "100%",
      minHeight: "100vh",
      backgroundColor:'#121212'
      }}>
    <RecoilRoot>
    <Router> 
      <Appbar/> 
      <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      
      </Routes>  
    </Router>
    </RecoilRoot>
    </Paper>
    </div>
  </>

  )
}

export default App;
