import React from 'react'

function True() {

 
  const handleLogout = () => {
    localStorage.removeItem("login");
    window.location = "/"
  }

  return (
    <>
    <h1>Bienvenido</h1>
    <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  )
}

export default True