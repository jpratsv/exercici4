// import React, { useState } from "react";

export default function FicaRepetits({ setArrayNumeros }) {
  // const [arrayNumeros, setArrayNumeros] = useState("");

  const realizarProceso = () => {
    setArrayNumeros((numerosOriginals) => {
      const copiaDelsNumeros = [...numerosOriginals];
      let total = copiaDelsNumeros.length;
      let arrayResultado = [];
      if (total > 2) {
        arrayResultado = copiaDelsNumeros.filter(
          (ele, pos) => copiaDelsNumeros.indexOf(ele) !== pos
        );
      }
      return arrayResultado;
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={realizarProceso}>
        Realizar el Proceso
      </button>
    </>
  );
}
