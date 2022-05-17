import React from 'react';

const IdCard = (props) => {
  return (
    <div className="card">
          <img className="picture" src={props.picture} alt="" />
      <div>
        <span className="bold">First Name:</span> {props.firstName}
      </div>
      <div>
        <span className="bold">Last Name:</span> {props.lastName}
      </div>
      <div>
        <span className="bold">Gender:</span> {props.gender}
      </div>
      <div>
        <span className="bold">Height:</span> {props.height}
      </div>
      <div>
        <span className="bold">Birth:</span> {props.birth.toDateString()}
      </div>
    </div>
  );
};

export default IdCard;

{/* <div className={"App"}>
    <Navbar />
    <Greetings languauge name={ 'React'} color ={'red'} />
    <Greetings languauge name= { 'Javascript'}color ={'yellow'} />
    <Greetings languauge name= { 'MongoDB'}color ={'green'} url/>
    <Greetings2 languauge name= { 'python'}color ={'blue'} url />
   <Greetings2 Greetingsinfo={{
     name: 'python',
     color: 'blue',
     url: 'htttps//www.python.org/'
   }} />
    </div> */}