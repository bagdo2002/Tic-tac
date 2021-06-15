import React, { useEffect, useState } from "react";
const one = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(11);

const Tic = () => {
  const [position, setPosition] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [player, setPlayer] = useState("X");
  useEffect(() => {
    checkWinner();
  });
  const checkWinner = () => {
    for (let i = 0; i < one.length; i++) {
      const [a, b, c] = one[i];
      if (
        position[a] &&
        position[a] === position[b] &&
        position[b] === position[c]
      ) {
        setPosition(["", "", "", "", "", "", "", "", ""]);

        return `Winner- ${setPlayer(`Winner-${position[a]}`)}`;
      }
      let count = 0;
      position.forEach((word, idx) => {
        if (word === "X" || word === "0") {
          count++;
        }
      });
      if (count === 9 && player !== "Winner-X" && player !== "Winner-0") {
        setPlayer("Draw");
        setTimeout(() => {
          setPosition(["", "", "", "", "", "", "", "", ""]);
        }, 500);
      }
      console.log(count);

      if (player === `Winner-X` || player === `Winner-0` || player === "Draw") {
        setTimeout(() => {
          return setPlayer("X");
        }, 500);
      }
    }

    return null;
  };
  console.log(position);

  const handlePosition = (idx) => {
    setPosition(
      position.map((current, index) => {
        if (index === idx && current === "") {
          return player;
        }
        return current;
      })
    );

    if (position[idx] === "") {
      player === "X" ? setPlayer("0") : setPlayer("X");
    }
  };

  return (
    <div className="app">
      <div className="table">
        <div className="status">{player}</div>
        <div
          className="square"
          onClick={() => {
            handlePosition(0);
          }}
        >
          {position[0]}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(1);
          }}
        >
          {position[1]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(2);
          }}
        >
          {position[2]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(3);
          }}
        >
          {position[3]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(4);
          }}
        >
          {position[4]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(5);
          }}
        >
          {position[5]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(6);
          }}
        >
          {position[6]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(7);
          }}
        >
          {position[7]}{" "}
        </div>
        <div
          className="square"
          onClick={() => {
            handlePosition(8);
          }}
        >
          {position[8]}{" "}
        </div>
      </div>
    </div>
  );
};

export default Tic;
