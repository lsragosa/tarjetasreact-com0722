

import Seccion from "./Components/Seccion"

const lista = [
  {
    id: 1,
    producto: "BIOPET PERRO ADULTO X 20 KG",
    precio: "4.030",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/06/Biopet-adultos-x-20-Kg.jpg"
  },
  {
    id: 2,
    producto: "KROF PERRO ADULTO X 15KG",
    precio: "7.430",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/06/Krof-Perro-Adulto.jpg"
  },
  {
    id: 3,
    producto: "MAINTENANCE CRIADORES ADULTO PERRO X 22 KG",
    precio: "4.390",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/09/Maintenance-Criadores-Adulto-Perro-x-22-kg.jpg"
  },
  {
    id: 4,
    producto: "MINI RELAX CARE X 2,5 KG",
    precio: "3.770",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2022/04/MINI-RELAX-CARE.jpg"
  }
  ]

function App() {
  return (
    <>
      <Seccion lista = {lista} />

    </>

  );
}

export default App;
