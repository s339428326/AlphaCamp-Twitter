// import './App.css';
import "./styles/main.scss";
//test components
import PageTitle from "./components/PageTitle/PageTitle";

function App() {
  return (
    <div className="App">
      <h1>React Start</h1>
      <button className="btn btn-primary text-white">Test</button>
      <div className="row justify-content-center">
        <div className="col-7">
          <PageTitle title={"stanley"} count={12} />
        </div>
      </div>
    </div>
  );
}

export default App;
