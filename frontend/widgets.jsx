import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from "./tabs";
import Clock from "./clock";
import Weather from "./weather";
import AutoComplete from "./autocomplete";

const tabs = [{title: "tab1", content: "content1"}, {title: "tab2", content: "content2"}];
const names = ["Alice", "Ben", "James", "John", "Sarah", "Sean", "Zedd"];

document.addEventListener("DOMContentLoaded", () => {
  const tabWidget = document.getElementById("tabWidget");
  ReactDOM.render(<Tabs tabs={tabs}/>, tabWidget);

  const clockWidget = document.getElementById("clockWidget");
  ReactDOM.render(<Clock />, clockWidget);

  const weatherWidget = document.getElementById("weatherWidget");
  ReactDOM.render(<Weather />, weatherWidget);

  const autoComplete = document.getElementById("autoComplete");
  ReactDOM.render(<AutoComplete names={names}/>, autoComplete);
});
