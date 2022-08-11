simport React from 'react';
import DisplayImage from "./Components/DisplayImage";

const App = () => {
  console.log('Render: App');

  return (
    <div>
      <h1>Extract some colors from an image</h1>
      <DisplayImage/>
    </div>

    );
};


export default App;
