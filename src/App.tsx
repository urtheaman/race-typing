import { Route, Routes } from "react-router-dom";
import Editor from "./editor";
import Header from "./header";
import Result from "./Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Editor />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
