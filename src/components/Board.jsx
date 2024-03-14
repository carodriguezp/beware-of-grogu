import { useState } from "react";
import PropTypes from 'prop-types';
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

Board.propTypes = {
  groguPosition: PropTypes.number,

};

export default Board;
