import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountView from './pages/AccountView';
import CharacterViewer from './pages/CharacterViewer';

const App = () => {
  return (
    <div className="app-main">
      <div className="bg-main-opaque">
        <Router>
          <Routes>
            <Route path="/" element={<AccountView />} />
            <Route path="/characterView" element={<CharacterViewer />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
