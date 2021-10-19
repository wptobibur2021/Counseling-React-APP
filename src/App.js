import Header from "./Components/Header/Header";
import AuthContext from "./Context/AuthContext";
import Home from "./Pages/Home";
import RouterNav from "./Router/RouterNav";
function App() {
  return (
    <AuthContext>
      <RouterNav></RouterNav>
    </AuthContext>
  );
}

export default App;
