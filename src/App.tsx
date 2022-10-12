import { Routes, Route } from 'react-router-dom'
import Signin from 'auth/SignInView';
import DashboardLayout from 'dashboard/DashboardLayout';
import Dashboard from 'dashboard/DashboardView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
