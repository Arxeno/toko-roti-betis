import Card from "./components/Card.js";
import "./App.css";
// import ScriptTag from "react-script-tag";

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwODM4ODczLCJpYXQiOjE2NjgyNDY4NzMsImp0aSI6Ijg5OTE2N2ZjNzQ5NTQyZmRiMWVjZWIwNmZlZjNiMGNkIiwidXNlcl9pZCI6NzF9.4ImNX3bFSkla9bu-SL2xWK5wJdxpcas-_vSe4BeNCEU",
  },
};

fetch("http://betis23-oprec.herokuapp.com/roti/", options)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("GET ROTI");
    console.log(responseJson);
  })
  .catch((err) => console.log("error ngab"));

function App() {
  return (
    <div className="App">
      <h1>Toko Roti App</h1>
      <div id="container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
