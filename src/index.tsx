// src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./components/button";
import WAIARIA from "./components/WAIARIA";
import MicroData from "./components/MicroData";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => (
  <div>
    {message}
    <Button
      onClick={() => {
        console.log("ホゲ");
      }}
    />
    <WAIARIA />
    <MicroData />
  </div>
);
ReactDOM.render(
  <App message="Hello, World with TypeScript and React! hogehoge"></App>,
  document.getElementById("root")
);
