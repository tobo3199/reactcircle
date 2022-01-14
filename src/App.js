import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const cordinates = [
    //  x
    //<-->      links nach rechtes y ist von unten nach oben
    //[x][y]

    [100, 380],
    [325, 300],
    [200, 120],
    [250, 400],
    [150, 100],
    [400, 100],
    [450, 325],
    [220, 380],
    [500, 480],
    [90, 230],
    [330, 180],
    [160, 410],
    [280, 380],
    [122, 378]
  ]

  let radius1 = 0;

  let x4 = 0;
  let y4 = 0;
  let r1 = 1000;

  const [xResult, setXResult] = useState(0);
  const [yResult, setYResult] = useState(0);
  const [radiusResult, setRadiusResult] = useState(0);

  function bruteForce() {
    let x = 0;
    let y = 0;
    let z = 0;
    let counter = 0;

    for (x; x <= 11; x++) {
      for (y = x + 1; y <= 12; y++) {
        for (z = y + 1; z <= 13; z++) {
          counter = counter + 1;
          console.log("x: " + x + "y: " + y + "z: " + z + "counter: " + counter)

          const a = (cordinates[y][1] * cordinates[y][1] - cordinates[z][1] * cordinates[z][1] + cordinates[y][0] * cordinates[y][0] - cordinates[z][0] * cordinates[z][0]) / (2 * (cordinates[z][1] - cordinates[y][1]));
          const b = (cordinates[x][1] * cordinates[x][1] - cordinates[y][1] * cordinates[y][1] + cordinates[x][0] * cordinates[x][0] - cordinates[y][0] * cordinates[y][0]) / (2 * (cordinates[y][1] - cordinates[x][1]));
          const c = (cordinates[y][0] - cordinates[x][0]) / (cordinates[y][1] - cordinates[x][1]);
          const d = (cordinates[z][0] - cordinates[y][0]) / (cordinates[z][1] - cordinates[y][1]);

          x4 = (a - b) / (c - d);
          y4 = (-d) * x4 - a;

          radius1 = Math.sqrt((cordinates[x][0] - x4) * (cordinates[x][0] - x4) + (cordinates[x][1] - y4) * (cordinates[x][1] - y4));

          console.log("Radius: " + radius1)
          console.log("----------------------------------")
          if (InRange(x4, y4, radius1) === true) {
            console.log("----------------------------------")
            if (radius1 < r1) {
              r1 = radius1;
              setXResult(x4);
              setYResult(y4);

            }
          }

        }
      }
    }

    setRadiusResult(r1);

    console.log(r1)
  }

  function Paint() {

    return (
      <circle cx={xResult} cy={yResult} r={radiusResult} stroke="black" fill="" className="circle"
      />

    );

  }

  function InRange(x4, y4, radius1) {

    for (let x = 0; x < 13; x++) {
      let abstand = Math.sqrt((cordinates[x][0] - x4) * (cordinates[x][0] - x4) + (cordinates[x][1] - y4) * (cordinates[x][1] - y4));
      console.log("abstand: " + abstand)

      if (abstand > radius1) {
        console.log("exit")
        return false;
      }
    }
    return true;
  }

  return (

    <div id="box">
      < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750" width="750" height="750" >
        <circle cx={cordinates[0][0]} cy={cordinates[0][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[1][0]} cy={cordinates[1][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[2][0]} cy={cordinates[2][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[3][0]} cy={cordinates[3][1]} r="5" stroke="black" fill="" className="circle"
        />

        <circle cx={cordinates[4][0]} cy={cordinates[4][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[5][0]} cy={cordinates[5][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[6][0]} cy={cordinates[6][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[7][0]} cy={cordinates[7][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[8][0]} cy={cordinates[8][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[9][0]} cy={cordinates[9][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[10][0]} cy={cordinates[10][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[11][0]} cy={cordinates[11][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={cordinates[12][0]} cy={cordinates[12][1]} r="5" stroke="black" fill="" className="circle"
        />
        <circle id='mittelpunkt' cx={xResult} cy={yResult} r="5" stroke="black" fill="" className="circle"
        />
        <Paint onClick={bruteForce}></Paint>
      </svg >
      <div>
        <button onClick={bruteForce}>BruteForce</button>
      </div>
    </div>



  );
}

export default App;
