import logo from './LogoGuardian.png';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1 className="Titulo">GUARDIAN
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
      <header class="Eslogan">Tu web segura</header>
      <nav class="menuPaginaPrincipal">
                <div class="contenedorMenu">
                    <ul>
                        <li>
                            <a href="inicio.html">Inicio</a>
                        </li>
                        <li>
                            <a href="quienes-somos.html">¿Quienes somos?</a>
                            
                        </li>
                        <li>
                            <a href="reportes.html">Hacer un Reporte</a>
                        </li>
                        <li>
                            <a href="login.html">Mi Cuenta</a>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
  );
}

export default App;
