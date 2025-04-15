import React, { useState, useEffect } from 'react';
import './Letreiro.css';

export default function Letreiro() {
  const textoCompleto = "Venha estudar na Fatec";
  const [textoAtual, setTextoAtual] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    let timeout;

    if (indice < textoCompleto.length) {
      timeout = setTimeout(() => {
        setTextoAtual((prev) => prev + textoCompleto[indice]);
        setIndice((prev) => prev + 1);
      }, 150);
    } else {
      // Pausa antes de reiniciar
      timeout = setTimeout(() => {
        setTextoAtual("");
        setIndice(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [indice, textoCompleto]);

  return <div className="letreiro">{textoAtual}</div>;
}
