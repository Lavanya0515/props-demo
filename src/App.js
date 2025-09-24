import Greeting from "./Greeting";

function App() {
  const message = "Welcome to React Props!";

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Passing Data with Props</h1>
      <Greeting message={message} />
    </div>
  );
}

export default App;
