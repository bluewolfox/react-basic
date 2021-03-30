import React, { memo, useCallback } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log("td rendered");
  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
