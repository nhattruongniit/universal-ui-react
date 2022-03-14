import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import SongList from "pages/Song/SongList";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SongList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
