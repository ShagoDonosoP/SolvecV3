import ReactDOM from 'react-dom/client';
import "./main.css"

import { App } from "./App.tsx";

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.createRoot(root).render(<App />);
}