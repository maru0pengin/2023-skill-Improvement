// src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./components/button";

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
  </div>
);
ReactDOM.render(
  <App message="Hello, World with TypeScript and React! hogehoge"></App>,
  document.getElementById("root")
);
