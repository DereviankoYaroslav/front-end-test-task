import { useState } from 'react';
import './App.css';
import LightTheme from './components/LightTheme';


function App() {

  const [theme, setTheme] = useState(0);


  if (!theme){
    return (
    <div className='App'>
        <LightTheme/>
    </div>
    );
  }
  else{
    return (
      <div className='App'>
          Dark Theme
      </div>
    );
  }
}

export default App;
