import React, { memo, useMemo } from "react";
import Td from "./Td";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) =>
          useMemo(() => (
            <Td
              cellIndex={i}
              rowIndex={rowIndex}
              dispatch={dispatch}
              cellData={rowData[i]}
            />
          ),[rowData[i]])
        )}
    </tr>
  );
});

export default Tr;
