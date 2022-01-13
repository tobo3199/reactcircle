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
    [150, 100]
    /*[400, 100],
    [450, 325],
    [220, 380],
    [500, 480],
    [90, 230],
    [330, 180],
    [160, 410],
    [280, 380],
    [122, 378]
*/

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
    let x = 0;
    let y = 0;
    let z = 0;
    let counter = 0;

    cordinates.forEach(console.log)

    for (x; x <= 2; x++) {
      for (y = x + 1; y <= 3; y++) {
        for (z = y + 1; z <= 4; z++) {
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

            }
          }

        }
      }
    }


    setRadiusResult(r1);
    setXResult(x4);
    setYResult(y4);

    console.log(r1)

  }

  function Paint() {


    return (
      <circle cx={xResult} cy={yResult} r={radiusResult} stroke="black" fill="" className="circle"
      />
    );

  }

  function InRange(x4, y4, radius1) {

    for (let x = 0; x < 5; x++) {
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
      < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="750" height="750" >
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

        {/*
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
*/}
        <Paint onClick={bruteForce}></Paint>



      </svg >
      <div>
        <button onClick={bruteForce}>BruteForce</button>


      </div>
    </div>



  );
}

export default App;
