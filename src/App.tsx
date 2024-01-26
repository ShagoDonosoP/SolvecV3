
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaMantencion from "./Pagina Mantencion/PaginaMantencion"
import MainHome from './MainHome';
import NotFoundPage from './PaginaNoEncontrada';

export const App = () => {
  return (


    <>

      <Router>
        <Routes>
          <Route path="/" element={<PaginaMantencion />} />
          <Route path="/dev" element={<MainHome />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      
    </>
  );
};

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.createRoot(root).render(<App />);
}
