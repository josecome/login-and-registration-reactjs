const Header = ({ title }) => {

  const imgStyle = {
    width: '60px',
    height: '60px',
  };
  const titleStyle = {
    marginLeft: '6px',
    fontSize: '26px',
  }
  return (
    <header className='header'>
      <img src="./logo192.png" style={ imgStyle } alt="Logo" /><span style={ titleStyle }>{ title }</span>
    </header>
  );
}

export default Header