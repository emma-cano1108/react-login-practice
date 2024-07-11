
function NotFound() {
  return (
    <>
    <h1>Error 404, Not Found</h1>
    <br />
    <button onClick={()=>{window.location = "/"}}>Volver atrás</button>
    </>
  )
}

export default NotFound