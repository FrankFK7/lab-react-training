const Greetings = ({ lang, children }) => {
  return (
    <div>
      {lang === 'de' ? 'Hallo ' : 'Bonjour '}
      {children}
    </div>
  );
};

export default Greetings;