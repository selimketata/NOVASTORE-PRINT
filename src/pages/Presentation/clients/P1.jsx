import { React} from 'react';
import im3 from './Group 107.png';
import pic from './pic.png'
import './P1.css';

export default function P1(props) {
  return (
    <div >
       <img width={90} src={pic} id='picture' />
      <h1>Ce Due Les Clients Disent De Nous</h1>
      <hr className="light" />
      <div className="parent">
        {props.Users &&
         props.Users.map((record) => {
            return (
              <div className="av1" key={record.id}>
                <div className="container">
                  <div className="child1">
                    <div className="appostrophe">
                      <img width={90} src={im3} />
                    </div>
                    <div className="text">
                      <p id="avis">{record.avis}</p>
                    </div>
                    <div className="imname1">
                      <div className="im">
                        <img src={record.image} id="i" />
                      </div>
                      <div className="name">
                        <p id="nom">{record.name}</p>
                        <p id="p">
                          <strong>- {record.poste} -</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
