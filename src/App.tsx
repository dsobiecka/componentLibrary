import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button/Button";
import { Dropdown } from "./components/ui/Dropdown/Dropdown";
import { Input } from "./components/ui/Input/Input";
import { ListElement } from "./components/ui/ListElements/ListElement";

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

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
