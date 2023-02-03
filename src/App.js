import "./App.css";
import Nav from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import Filters from "./Components/Filters/Filters";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Nav />
      <Breadcrumbs />
      <Header />
      <div className="app">
        <Filters />
        {/* <div className="divider-vertical"></div> */}
        <Main />
      </div>
    </div>
  );
}

export default App;
