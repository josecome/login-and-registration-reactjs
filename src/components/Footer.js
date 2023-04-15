import { Link } from 'react-router-dom'

const Footer = () => {
  const centerText = {
    textAlign: 'center',
  };
  const divStyle = {
    width: '100%',
    backgroundColor: '#EFF1F3',
    position: 'absolute',
    bottom: '0px',
    height: '60px',
  };
  return (
    <div style={ divStyle }>
      <p style={ centerText }>Copyright &copy; 2023</p>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Footer