import React, { useState } from 'react';
import './Contador.css'; // Certifique-se de que suas classes CSS como 'contador_container', 'counter', etc., estejam aqui

const ContadorGenero = () => {
  const [countMasc, setCountMasc] = useState(0);
  const [countFem, setCountFem] = useState(0);

  const updateCounter = (gender, delta) => {
    if (gender === 'male') {
      setCountMasc(prev => Math.max(0, prev + delta));
    } else {
      setCountFem(prev => Math.max(0, prev + delta));
    }
  };

  const resetCounters = () => {
    setCountMasc(0);
    setCountFem(0);
  };

  const total = countMasc + countFem;

  const GeneroCounter = ({ genero, label, count, setCount }) => (
    <div className="genero">
      <img
        src={genero === 'male' ? "../public/IMG/ft_Homen.png" : '../public/IMG/ft_Mulher.png'}
        alt={label}
      />
      <div>
        <button onClick={() => updateCounter(genero, 1)}>+</button>
        <button onClick={() => updateCounter(genero, -1)}>-</button>
      </div>
      <p>{label}</p>
      <div className="counter">{count}</div>
    </div>
  );

  return (
    <div className="contador_container">
      <h1>Total</h1>
      <div className="counter">{total}</div>

      <button onClick={resetCounters} className="reset-btn">Resetar</button>

      <div className="selecao_genero">
        <GeneroCounter genero="male" label="Homens" count={countMasc} setCount={setCountMasc} />
        <GeneroCounter genero="female" label="Mulheres" count={countFem} setCount={setCountFem} />
      </div>
    </div>
  );
};

export default ContadorGenero;
