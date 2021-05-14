import React, {useState} from 'react'

import LoginInput from './LoginInput'

function Login() {

  const [showLogin, setShowLogin] = useState(false);

    return (
      <div>
        <div>
          {
            showLogin && <LoginInput />
          }
        </div>
        <button onClick={setShowLogin}>
           Login
        </button>
      </div>
    );
  
}

export default Login;
