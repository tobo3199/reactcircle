import logo from './logo.svg';
import './App.css';

function App() {

  const x1 = 300;
  const y1 = 300;
  const x2 = 200;
  const y2 = 120;
  const x3 = 250;
  const y3 = 400;

  const a = (y2 * y2 - y3 * y3 + x2 * x2 - x3 * x3) / (2 * (y3 - y2));
  const b = (y1 * y1 - y2 * y2 + x1 * x1 - x2 * x2) / (2 * (y2 - y1));
  const c = (x2 - x1) / (y2 - y1);
  const d = (x3 - x2) / (y3 - y2);

  const x4 = (a - b) / (c - d);
  const y4 = (-d) * x4 - a;

  const rs1 = x2 - x1;

  const radius = Math.sqrt(((x2 - x1) / 2) * ((x2 - x1) / 2) + ((y2 - y1) / 2) * ((y2 - y1) / 2));
  const radius1 = Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4));

  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);
  console.log("d: " + d);
  console.log("x4: " + x4);
  console.log("y4: " + y4);

  return (

    <div id="box">
      < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="250" height="250" >
        <circle cx={x1} cy={y1} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={x2} cy={y2} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={x3} cy={y3} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={x4} cy={y4} r={radius1} stroke="black" fill="" className="circle"
        />

      </svg >
    </div>


  );
}

export default App;
