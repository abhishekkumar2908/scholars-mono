import { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';

function MainHeader() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} />
      {/* Render the Login component in a modal dialog if showLogin is true */}
      {showLogin && <Login onClose={handleLoginClose} />}
      {/* Blur the main content if the Login component is displayed */}
      <div style={{ filter: showLogin ? 'blur(5px)' : 'none' }}>
        {/* Render the main content of your page here */}
        <h1>Welcome to my website!</h1>
        <p>This is the main content of my page.</p>
      </div>
    </div>
  );
}

export default MainHeader;
