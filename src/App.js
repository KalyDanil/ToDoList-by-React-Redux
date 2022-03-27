import ToDoApp from "./components/ToDO/ToDo";

function App() {
  const h1Style = {
    textAlign: 'center',
    fontSize: '64px',
    opacity: '.3',
    color: '#b83f45'
  };
  return (
    <div className="App">
      <h1 style={h1Style}>
        ToDoList
      </h1>
      <ToDoApp/>
    </div>
  );
}

export default App;
