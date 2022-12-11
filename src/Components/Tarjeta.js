

import Boton from "./Boton"



const Tarjeta = (props) => {
  return (
    <figure
    style={{
        border: "1px solid #d2d2d2",
        padding: "10px",
        width: "200px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    }}
    >
        <img src={props.objeto.img} alt=""/>
        <figcaption>
            <h3
              style={{
                display: "inline-block",
                fontFamily: "inherit",
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#333",
              }}
            >{props.objeto.producto}</h3>
            <p
              style={{
                color: "#017380"
              }}
            > ${props.objeto.precio}</p>
        </figcaption>
        <Boton/>
    </figure>

  )
}

export default Tarjeta