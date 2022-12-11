


import Tarjeta from "./Tarjeta"


const ListaTarjeta = (props) => {
  return (
    <div
       style={{
        display: "flex",
        flexwrap: "wrap"
       }}
    >
    {
      props.lista.map(objeto => <Tarjeta Key={objeto.id} objeto={objeto} />)
    }
    </div>
  )
}

export default ListaTarjeta
