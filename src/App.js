import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeTheme from './components/changeTheme';
import { useSelector } from 'react-redux';


function App() {

  const darkTheme = useSelector((state) => state.theme.value)

  const backgroundColor = darkTheme ? "#000" : "#fff"

  return (
    <div className="App" style={{background: backgroundColor, padding: "30px 0"}}>

      <Profile/>
      <Login />
      <ChangeTheme />
    </div>
  );
}

export default App;
