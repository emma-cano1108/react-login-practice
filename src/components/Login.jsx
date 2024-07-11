import { useState } from "react";

import "../css/login.css";

function Login() {
  const userData = {
    user: "kjotalam",
    pass: "1104",
  };

  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user !== null && pass !== null) {
      if (user === userData.user && pass === userData.pass) {
        localStorage.setItem("login", "logged in");
        window.location = "/true";
      } else {
        alert("Datos incorrectos");
      }
    } else {
      alert("Debes llenar todos los campos");
    }

    if (user === userData.user && pass === userData.pass) {
      localStorage.setItem("login", "logged in");
      window.location = "/true";
    } else if (!user || !pass) {
      alert("Debes llenar todos los campos");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="user">
            <label className="pass-text">Usuario</label> <br />
            <input
              type="text"
              placeholder="Ingrese aquí su usuario"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="pass">
            <label className="pass-text">Contraseña</label> <br />
            <input
              type="password"
              placeholder="Ingrese aquí su contraseña"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <br />
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
