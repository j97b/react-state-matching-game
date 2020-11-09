import React from "react";
import Tile from "../Tile/Tile";

import "./Board.css";

const Board = (props) => {
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  };

  const mapTiles = props.tiles.map((tile) => {
    <Tile {...tile} />;
  });

  return (
    <div className="Board" style={gridConfig}>
      {mapTiles}
    </div>
  );
};

export default Board;
