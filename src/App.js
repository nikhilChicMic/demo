import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import Canvas from './Canvas';
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    console.log(event.target.checked)
    setChecked(event.target.checked);
  };
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  const auth = getAuth();

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3001/',
    // This must be true.
    handleCodeInApp: true 
  };

  const updateAuth = () => {
    sendSignInLinkToEmail(auth, 'nik123@yopmail.com', actionCodeSettings)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log({ user })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode }, {errorMessage})
        // ..
      });
  }

  return (
    <div className="App">
      <Canvas style={{ marginTop: 10 }} draw={draw} />
      <Checkbox
        checked={checked}
        onChange={(e) => handleChange(e)}
      // inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <button onClick={() => updateAuth()}>click</button>
    </div>
  );
}

export default App;
