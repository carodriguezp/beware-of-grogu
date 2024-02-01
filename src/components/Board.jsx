import { useState } from "react";
import Cell from "./Cell";

function Board() {

  const [boardDiv, setBoardDiv] = useState(Array(7).fill(null))


  const handleDiv = () => {

    return boardDiv.map((i) => <Cell keyValue={i} />)
  }



  return (
    <section className="board">
      {handleDiv()}
    </section>
  );



}

export default Board;
