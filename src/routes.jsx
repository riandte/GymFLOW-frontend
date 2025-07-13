import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastrarUsuarios from './pages/cadastroAlunos/cadastroUsuarios';

const Rotas = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrarUsuarios" element={<CadastrarUsuarios />} />
        </Routes>
    </Router>
)

export default Rotas;