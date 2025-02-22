function UserPage({ name='none', age='none' }) {//using default props
    return (
      <>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
      </>
    );
  }
  

  
  export default UserPage; 
  