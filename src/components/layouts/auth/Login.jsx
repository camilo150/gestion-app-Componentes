import userLogo from "../../../assets/user.avif";
import { useState } from "react";

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  console.log(getUsuario);
  return (
    <form className="login-form">
      <img src={userLogo} alt="Usuario" />
      <h2>Iniciar sesión</h2>
      <div className="input-group">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          onChange={(e) => {
            setCorreo(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
