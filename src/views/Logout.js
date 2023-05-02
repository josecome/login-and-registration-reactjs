import { useEffect } from "react";

const Logout = ({ logOutUser }) => {
    
    useEffect(() => {    
        logOutUser();
      });

    const divStyle = {
        textAlign: 'left',
    };
    return (
        <div style={ divStyle }>Logged out successfully!</div>
    );
}

export default Logout