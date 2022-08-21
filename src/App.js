import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

Header.defaultProps = {
  title: "Rick and Morty App",
};

export default App;
