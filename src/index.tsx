// src/index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message="Hello, World with TypeScript and React! hogehoge" />,
  document.getElementById("root")
);
