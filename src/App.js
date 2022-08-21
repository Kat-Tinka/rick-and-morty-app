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

// 3.>>> This file holds a function named App and we then export this function because as I mentioned,in modern JavaScript, if you have something,like a function or a class or an object defined in one file and you wanna use it in another file,you have to export and import it.So here in App.js where this function is defined,we export it, and then we import it (for example) in index.js,and that's how these two files are connected and how we can use a feature,in this case, a function defined in App.js inside of index.js.
