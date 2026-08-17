import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminAnalyticsDashboard from './AdminAnalyticsDashboard';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminAnalyticsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
