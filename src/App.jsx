import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import { useState } from "react";

//Following this tutorial -> https://youtu.be/waCkrUIlSTo?si=5xzVA8juhhSuWOwa
const App = () => {
  //State Hooks
  const [category, setCategory] = useState("general");

  return (
    <div>

      {/* All Bootstrap Buttons
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>

        Bootstrap Dropdown Menu
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>

        Bootstrap Spinner
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> 
        */}

        <Navbar setCategory={setCategory}/>
        <Newsboard category={category}/>
    </div>
  )
}
export default App