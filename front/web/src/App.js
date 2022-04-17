import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Upload from "./pages/Upload"
import ReadAll from "./pages/ReadAll"

function App() {
  return (
    <div >
      <header >

        <BrowserRouter>

          <Header />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path='/upload' element={<Upload />} />
            <Route path='/readAll' element={<ReadAll />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;