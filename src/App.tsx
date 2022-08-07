import { Typography } from '@mui/material';
import './App.css';
import { DescriptionBox } from './Components/DescriptionBox';
import { GameManager } from './Components/GameManager';

function App() {
  return (
    <div className="App">
      <Typography variant="h1">
        Lost Shores
      </Typography>
      <DescriptionBox/>
      <GameManager/>
    </div>
  );
}

export default App;
