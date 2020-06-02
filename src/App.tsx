import React from 'react';
import { Column } from "./Column"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"
import { AppContainer } from "./styles"

const App = () => {
    return (
        <AppContainer>
            <Column text="To Do">
                <Card text="Deploy to S3" />
            </Column>
            <Column text="In Progress">
                <Card text="Creating a React Typescipt App" />
            </Column>
            <Column text="Done">
                <Card text="Learned React & Typescript" />
            </Column>
        </AppContainer>
    )
}


export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }