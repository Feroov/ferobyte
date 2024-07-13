import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true); // Start fade out
    }, 3000); // Start fade after 3 seconds

    setTimeout(() => {
      setIsLoading(false); // Remove loading component after fade out
    }, 4000); // Remove loading 1 second after fade starts (adjust as needed)
  }, []);

  return (
    <Router>
      {isLoading && <Loading fade={fade} />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home show={!isLoading} />} />
      </Routes>
    </Router>
  );
}

export default App;