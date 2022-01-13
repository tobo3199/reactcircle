import logo from "./logo.svg";
import "./App.css";

function App() {
  const h = 0;
  const i = 0;
  const j = 0;
  const k = 0;
  const l = 0;
  const m = 0;

  var rancircles = [h, i, j, k, l, m];

  for (let i = 0; i < rancircles.length; i++) {
    rancircles[i] = Math.floor(Math.random() * 250);
    console.log(rancircles[i]);
  }

  const x1 = rancircles[0];
  const y1 = rancircles[1];
  const x2 = rancircles[2];
  const y2 = rancircles[3];
  const x3 = rancircles[4];
  const y3 = rancircles[5];

  /*
  const a = 0;
  const b = 0;
  const c = 0;
  const d = 0;
  const radius = 0;
  const radius1 = 0;
  const x4 = 0;
  const y4 = 0;
  const rs1 = 0;

  do {
  */
  const a = (y2 * y2 - y3 * y3 + x2 * x2 - x3 * x3) / (2 * (y3 - y2));
  const b = (y1 * y1 - y2 * y2 + x1 * x1 - x2 * x2) / (2 * (y2 - y1));
  const c = (x2 - x1) / (y2 - y1);
  const d = (x3 - x2) / (y3 - y2);

  const x4 = (a - b) / (c - d);
  const y4 = -d * x4 - a;

  const rs1 = x2 - x1;

  const radius = Math.sqrt(
    ((x2 - x1) / 2) * ((x2 - x1) / 2) + ((y2 - y1) / 2) * ((y2 - y1) / 2)
  );
  const radius1 = Math.sqrt((x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4));

  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);
  console.log("d: " + d);
  console.log("x4: " + x4);
  console.log("y4: " + y4);
  /*
  habe versucht eine "expection" zu machen, wenn a b c d x4 und y4 kleiner 0 sind oder x4 und y4 grösser als 250 sind
  } while (a && b && c && d > 0 && x4 && y4 > 0 && x4 && y4 > 250);
  */

  return (
    <div id="box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="250"
        height="250"
        className="range"
      >
        <circle
          cx={x1}
          cy={y1}
          r="5"
          stroke="black"
          fill=""
          className="circle"
          name="punkt1"
        />
        <circle
          cx={x2}
          cy={y2}
          r="5"
          stroke="black"
          fill=""
          className="circle"
          name="punkt2"
        />
        <circle
          cx={x3}
          cy={y3}
          r="5"
          stroke="black"
          fill=""
          className="circle"
          name="punkt3"
        />
        <circle
          cx={x4}
          cy={y4}
          r={radius1}
          stroke="black"
          fill=""
          className="circle"
          name="umkreis"
        />

      </svg>
    </div>
  );
}

export default App;
