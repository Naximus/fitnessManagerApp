import { Routes, Route } from "react-router-dom"
import './App.scss';
import Admin from './pages/admin/Admin';
import ClientProfile from "./pages/client-profile/ClientProfile";
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

function App() {
  const user = {
    type: 'trainer',
    name: 'Стоян Димитров',
    phone: '0888',
    email: 'stoyan@abv.bg',
    created: '2022.12.01',
    photo: null
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard user={user}/> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/admin" element={ <Admin user={user} /> } />
        <Route path="/clientProfile" element={ <ClientProfile user={user} /> } />
      </Routes>
    </div>
  );
}

export default App;