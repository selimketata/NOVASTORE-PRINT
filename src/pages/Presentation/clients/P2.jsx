import P1 from "./P1";
import { useState } from "react";
import { getUsers } from "./Users";

function P2() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);

  return (
    <div className="App">
      <div>
        <P1 Users={getUsers(page, limit)} />
      </div>
      <div className="circles">
        <span
          className="dot1"
          onClick={() => {
            setPage(1);
          }}
        ></span>
        <span
          className="dot2"
          onClick={() => {
            setPage(2);
          }}
        ></span>
        <span
          className="dot3"
          onClick={() => {
            setPage(3);
          }}
        ></span>
      </div>
    </div>
  );
}

export default P2;
