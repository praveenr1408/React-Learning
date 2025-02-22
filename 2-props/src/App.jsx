import UserPage from "./components/UserPage";

function App() {
  return (
    <div>
      <UserPage name="Praveen" age={22} />
      <UserPage /> {/* Uses defaultProps */}
    </div>
  );
}

export default App;
