import React, { useEffect, useRef } from 'react';
import './Relogio.css';

export default function Relogio() {
  const relogioRef = useRef(null);

  useEffect(() => {
    function atualizarRelogio() {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      const horarioAtual = `${horas}:${minutos}:${segundos}`;
      if (relogioRef.current) {
        relogioRef.current.textContent = horarioAtual;
      }
    }

    atualizarRelogio();
    const interval = setInterval(atualizarRelogio, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="relogio" ref={relogioRef}></div>;
}
