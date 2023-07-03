import { useState, ChangeEvent } from "react";
import "./App.css";
import { Button } from "./components/ui/Button/Button";
import { Dropdown } from "./components/ui/Dropdown/Dropdown";
import { Input } from "./components/ui/Input/Input";
import { ListElement } from "./components/ui/ListElements/ListElement";
import { Switch } from "./components/ui/Switch/Switch";
import { Navbar } from "./components/ui/Navbar/Navbar";

function App() {
  //button
  const handleClick = () => {
    console.log("Button clicked");
  };

  //dropdown
  const handleDropdownChange = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  //input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  //listElement
  const items = ["apple", "banana", "cherry"];

  const renderItem = (item: string) => {
    return item;
  };

  //switch
  const [isSwitchOn, setSwitchOn] = useState(false);
  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchOn(event.target.checked);
  };

  return (
    <div className="App">
      <p>Button</p>
      <Button onClick={handleClick} label="Click me" />

      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={handleDropdownChange}
        className="dropdown"
        buttonClassName="dropdown-button"
        menuClassName="dropdown-menu"
        itemClassName="dropdown-item"
      />

      <Input
        label="Enter text: "
        value={inputValue}
        onChange={handleInputChange}
      />

      <ul>
        {items.map((item, index) => (
          <ListElement key={index} item={item} renderItem={renderItem} />
        ))}
      </ul>

      <Navbar
        navClass="main-nav"
        ulClass="nav-list"
        liClass="nav-item"
        aClass="nav-link"
      />

      <Switch
        id="example-switch"
        name="exampleSwitch"
        checked={isSwitchOn}
        onChange={handleSwitchChange}
        className="example-switch"
      />
    </div>
  );
}

export default App;
