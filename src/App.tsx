import { Routes, Route } from 'react-router-dom'
import Signin from 'Auth/SignInView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
