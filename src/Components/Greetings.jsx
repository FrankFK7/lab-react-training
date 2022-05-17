import React from 'react';

const Greetings = ({ children, lang }) => {
  let greeting;

  switch (lang) {
    case 'es':
      greeting = 'Hola';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'en':
    default:
      greeting = 'Hello';
  }

  return (
    <div className="card">
      {greeting} {children}
    </div>
  );
};

export default Greetings;