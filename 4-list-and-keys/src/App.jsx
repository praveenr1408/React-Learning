import "./App.css";

function App() {
  const menuItems = ["Home", "About", "Contact"];

  const studenNames = [
    { id: 1, name: "Praveen" },
    { id: 2, name: "Hari" },
    { id: 3, name: "Bala" }
  ];
  return (
    <>
      {/* Menu items using array with map method */}
      <p>Menu items using array with map method</p>
      <ul>
        {menuItems.map((menuItem, index) => {
          return <li key={index}>{menuItem}</li>
        })}
      </ul>


      {/* Student list using array of objects */}
      <p>Student list using array of objects</p>
      <ul>
        {studenNames.map((studenName)=>(
          <li key={studenName.id}>{studenName.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
