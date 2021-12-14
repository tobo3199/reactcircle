import logo from './logo.svg';
import './App.css';

function App() {

  const x1 = 100;
  const y1 = 100;
  const x2 = 150;
  const y2 = 150;

  const x3 = (x2 - x1) / 2;
  const y3 = (y2 - y1) / 2;

  const rs1 = x2 - x1;
  const b = 5;
  const radius = Math.sqrt(((x2 - x1) / 2) * ((x2 - x1) / 2) + ((y2 - y1) / 2) * ((y2 - y1) / 2))



  return (
    < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="250" height="250" >
      <circle cx={x1} cy={y1} r="1" stroke="black" fill="" className="circle"
      />
      <circle cx={x2} cy={y2} r="1" stroke="black" fill="" className="circle"
      />
      <circle cx={x3} cy={y3} r={radius} stroke="black" fill="" className="circle"
      />

    </svg >



  );
}

export default App;
