import { useState } from "react";
import Cell from "./Cell";

function Board({ groguPosition }) {

  const [boardDiv, setBoardDiv] = useState(Array(7).fill(null))


  const handleDiv = () => {

    return boardDiv.map((cell, i) => <Cell groguPosition={groguPosition} key={i} keyProp={i} />)
  }



  return (
    <section className="board">
      {handleDiv()}
    </section>
  );



}

export default Board;
