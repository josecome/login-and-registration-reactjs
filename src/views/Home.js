import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Home = (loginStatus) => {  
  const navigate = useNavigate();
  useEffect(() => {    
    if(!loginStatus) {
      navigate('/login')
    }
  }, [loginStatus]);

  const spanStyle = {
    fontSize: '28px',
    marginTop: '20%',
  };
    return (
      <div>
        <span style={ spanStyle }>I am home page</span>
      </div>
    );
} 

export default Home