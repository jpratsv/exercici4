import React, { useState } from "react";
import EntraNumeros from "./EntraNumeros";
import FicaRepetits from "./FicaRepetits";

export default function EjercicioCuatro() {
  const [arrayNumeros, setArrayNumeros] = useState([]);

  return (
    <>
      <h2>Entrada de los elementos del Array</h2>
      <div className="entrada">
        <EntraNumeros setArrayNumeros={setArrayNumeros} />
        <FicaRepetits setArrayNumeros={setArrayNumeros} />
      </div>
      <hr />
      <ol>
        {arrayNumeros.map((num) =>
          num > 0 ? (
            <li key={num}> {num}</li>
          ) : (
            <li> {num} "--------------------"</li>
          )
        )}
      </ol>
    </>
  );
}
