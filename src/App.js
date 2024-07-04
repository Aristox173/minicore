import { BrowserRouter, Route, Routes } from "react-router-dom";
import Core from "./views/Core";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Core />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
