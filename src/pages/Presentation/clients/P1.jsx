import { React} from 'react';
import im3 from './Group 107.png';
import pic from './pic.png'
import './P1.css';

export default function P1(props) {
  return (
    <div >
      <div className='titre'>
      <span ><h1 id='a'>Ce Que Les ClientsDisen</h1></span> <span > <h1 id='color'>t De</h1></span><span> <h1 id='b'> Nous</h1></span> </div>
      <hr className="light" />
      <div className="parent">
        {props.Users &&
         props.Users.map((record) => {
            return (
              <div className="av1" key={record.id}>
                <div className="container">
                  <div className="child1">
                    <div className="appostrophe">
                      <img width={80} src={im3}  id='m'/>
                    </div>
                    <div className="text" >
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
