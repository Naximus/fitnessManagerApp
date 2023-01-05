import './App.css';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  const user = {
    type: 'trainer',
    name: 'Стоян Димитров',
    phone: '0888',
    email: 'stoyan@abv.bg',
    created: '2022.12.01'
  };

  return (
    <div className="App">
      <Dashboard user={user} />
    </div>
  );
}

export default App;