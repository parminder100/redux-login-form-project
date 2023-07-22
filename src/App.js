import Login from './Components/Login/Login';
import {Provider} from "react-redux";
import Store from './Components/Store/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home/:name" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
