import './App.css';
import {Routes,Router, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage'

function App() { 
  return (
    
        <Routes>
            <Route exect path='/' element={<HomePage/>}/>
            <Route exect path='login' element={<LoginPage/>}/>
            <Route exect path='register' element={<RegisterPage/>}/>
        </Routes>
   
  );
}

export default App;
