import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const x1 = 300;
  const y1 = 300;
  const x2 = 200;
  const y2 = 120;
  const x3 = 250;
  const y3 = 400;

  const cordinates = [
    //  x
    //<-->      links nach rechtes y ist von unten nach oben
    //[x][y]
    [0, 0],
    [300, 300],
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
    [430, 200]

  ]


  /*
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
    */
  /*
    function Calculate(x, y, z) {
      const cordinates = [
        //[x][y]
        [300, 300],
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
        [430, 200]
  
      ]
  
      const a = (cordinates[y][1] * cordinates[y][1] - cordinates[z][1] * cordinates[z][1] + cordinates[y][0] * cordinates[1][0] - cordinates[2][0] * cordinates[2][0]) / (2 * (cordinates[2][1] - cordinates[1][1]));
      const b = (cordinates[x][1] * cordinates[x][1] - cordinates[y][1] * cordinates[y][1] + cordinates[x][0] * cordinates[0][0] - cordinates[1][0] * cordinates[1][0]) / (2 * (cordinates[1][1] - cordinates[0][1]));
      const c = (cordinates[y][0] - cordinates[x][0]) / (cordinates[y][1] - cordinates[x][1]);
      const d = (cordinates[z][0] - cordinates[y][0]) / (cordinates[z][1] - cordinates[y][1]);
  
      const x4 = (a - b) / (c - d);
      const y4 = (-d) * x4 - a;
  
      const radius1 = Math.sqrt((cordinates[x][0] - x4) * (cordinates[x][0] - x4) + (cordinates[x][1] - y4) * (cordinates[x][1] - y4));
  
      return (
        <circle cx={x4} cy={y4} r={radius1} stroke="black" fill="" className="circle"
        />
      );
    }
  */


  let radius1 = 0;

  let x4 = 0;
  let y4 = 0;
  let r1 = 1000;

  const [xResult, setXResult] = useState(0);
  const [yResult, setYResult] = useState(0);
  const [radiusResult, setRadiusResult] = useState(0);


  function bruteForce() {
    let x = 1;
    let y = 1;
    let z = 1;
    let counter = 0;

    for (x; x <= 13; x++) {
      for (y = x + 1; y <= 13; y++) {
        for (z = y + 1; z <= 13; z++) {
          //radius
          counter = counter + 1;
          const a = (cordinates[y][1] * cordinates[y][1] - cordinates[z][1] * cordinates[z][1] + cordinates[y][0] * cordinates[1][0] - cordinates[2][0] * cordinates[2][0]) / (2 * (cordinates[2][1] - cordinates[1][1]));
          const b = (cordinates[x][1] * cordinates[x][1] - cordinates[y][1] * cordinates[y][1] + cordinates[x][0] * cordinates[0][0] - cordinates[1][0] * cordinates[1][0]) / (2 * (cordinates[1][1] - cordinates[0][1]));
          const c = (cordinates[y][0] - cordinates[x][0]) / (cordinates[y][1] - cordinates[x][1]);
          const d = (cordinates[z][0] - cordinates[y][0]) / (cordinates[z][1] - cordinates[y][1]);

          x4 = (a - b) / (c - d);
          y4 = (-d) * x4 - a;

          radius1 = Math.sqrt((cordinates[x][0] - x4) * (cordinates[x][0] - x4) + (cordinates[x][1] - y4) * (cordinates[x][1] - y4));



          if (InRange(x4, y4, radius1) == true) {

            console.log("radius: " + radius1)

            if (radius1 < r1) {
              r1 = radius1;
              console.log("kleinster radius: " + r1)
            }
          }
        }
      }
    }
    console.log("----------------------- ")
    console.log("x4: " + x4)
    console.log("y4: " + y4)
    console.log("r1: " + r1)

    setRadiusResult(r1);
    setXResult(x4);
    setYResult(y4);

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

      if (abstand > radius1) {
        return false;
      }
    }
    return true;
  }

  function Test() {

    const y2 = 2;
    const y3 = 3;
    const x2 = 4;
    const x3 = 5;
    const y1 = 6;
    const x1 = 7;

    const e = (y2 * y2 - y3 * y3 + x2 * x2 - x3 * x3) / (2 * (y3 - y2));
    console.log(e);
    const f = (y1 * y1 - y2 * y2 + y1 * y1 - x2 * x2) / (2 * (y2 - y1));
    console.log(f);
    const g = (2 - 5) / (2 - 5);
    const h = (3 - 2) / (3 - 2);

    const xtest = (e - f) / (g - h);
    const ytest = (-h) * xtest - e;

  }


  return (

    <div id="box">
      < svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 1000 1000" width="750" height="750" >
        <circle cx={x1} cy={y1} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={x2} cy={y2} r="5" stroke="black" fill="" className="circle"
        />
        <circle cx={x3} cy={y3} r="5" stroke="black" fill="" className="circle"
        />
        <Paint></Paint>
        <circle cx="200" cy="200" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="250" cy="200" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="200" cy="250" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="300" cy="300" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="325" cy="375" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="400" cy="200" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="400" cy="100" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="100" cy="500" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="50" cy="300" r="5" stroke="black" fill="" className="circle"
        />
        <circle cx="500" cy="500" r="5" stroke="black" fill="" className="circle"
        />


      </svg >
      <div>
        <button onClick={bruteForce}>BruteForce</button>
        <button onClick={Test}>Test</button>

      </div>
    </div>



  );
}

export default App;
