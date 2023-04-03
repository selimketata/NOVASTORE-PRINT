import P1 from '../Presentation/clients/P1';
import { useState} from 'react';
import {  getUsers } from '../Presentation/clients/Users';

function Presentation() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);

  return (
    <div className="App">
      <div >
        <P1 Users={getUsers(page, limit)} />
      </div>
      <div className="circles">
      <span className="dot1" onClick={() => { setPage(1)}}></span>
      <span className="dot1" onClick={() => { setPage(2) }}></span>
        <span className="dot3" onClick={() => { setPage(3); }}></span>
      </div>
    </div>
  );
}

export default Presentation;

