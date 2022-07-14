import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Works from "./pages/last-works-page/Works";
import SignIn from "./pages/sign-in/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='/works' element={<Works />}/>
          <Route path="/admin" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
