import { useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const location = useLocation();
  const imgStyle = {
    width: '60px',
    height: '60px',
  };
  const titleStyle = {
    marginLeft: '6px',
    fontSize: '26px',
  };
  const headerStyle = {
    with: '100%',
    textAlign: 'left',
  };
  const linkStyle = {
    paddingRight: '12px',
    textDecoration: 'none',
  };
  const linksStyle = {
    float: 'right',
  };

  return (
    <header style={ headerStyle }>
      <img src="./logo192.png" style={ imgStyle } alt="Logo" /><span style={ titleStyle }>{ title }</span>
      <span style={ linksStyle }>
        { location.pathname !== "/login" 
        && (<a style={ linkStyle } href="/login">Login</a>) }
        { location.pathname !== "/create_account" 
        && (<a style={ linkStyle } href="/create_account">Create Account</a>) }
        { location.pathname !== "/logout" 
        && (<a style={ linkStyle } href="/logout">Logout</a>) }
      </span>
    </header>
  );
}

export default Header