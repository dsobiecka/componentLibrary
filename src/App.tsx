import { useState, ChangeEvent } from "react";
import "./App.css";
import { Button } from "./components/ui/Button/Button";
import { Dropdown } from "./components/ui/Dropdown/Dropdown";
import { Input } from "./components/ui/Input/Input";
import { ListElement } from "./components/ui/ListElement/ListElement";
import { Switch } from "./components/ui/Switch/Switch";
import { Navbar } from "./components/ui/Navbar/Navbar";
import { Slider } from "./components/ui/Slider/Slider";
import { ProgressBar } from "./components/ui/ProgressBar/ProgressBar";

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

  //slider
  const images = [
    "https://worldbank.scene7.com/is/image/worldbankprod/rural-women-Nigeria-main-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp",
    "https://worldbank.scene7.com/is/image/worldbankprod/rural-women-Nigeria-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp",
    "https://c8.alamy.com/comp/2AK5A11/nigerian-woman-selling-in-a-local-nigerian-market-using-her-mobile-phone-and-credit-card-to-do-a-transaction-online-smiling-2AK5A11.jpg",
  ];

  //progressbar
  const [value, setValue] = useState(30);

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

      <Slider images={images} />

      <ProgressBar value={value} max={100} />
    </div>
  );
}

export default App;
