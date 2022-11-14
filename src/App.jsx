import React, { useState, useEffect } from 'react';

function App() {

  let [resourceType, setResourceType] = useState('Posts');
  let [items, setItems] = useState([]);

  // //=============== 1: It will execute a function when app renders
  // useEffect(() => {
  //   console.log('render');
  // });

  // //============== 2: It will execute when our resourceType variable changes
  // useEffect(() => {
  //   console.log('resource changed');
  // }, [resourceType]);

  // //============== 3: To execute onMount
  // console.log('render');

  // useEffect(() => {
  //   console.log('rendered onMount')
  // }, [])

  // //============== 4: Calling Data from API
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/' + resourceType)
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, [resourceType]);

  //============= 5: Showing Data on Screen
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/' + resourceType)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <div>
      <button onClick={() => setResourceType('Posts')}>Posts</button>
      <button onClick={() => setResourceType('Users')}>Users</button>
      <button onClick={() => setResourceType('Comments')}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
