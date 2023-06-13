import React, { useState, useEffect } from 'react';
import "../tarif/Progressbar.css"

const ProgressBar = () => {
  const [weight, setWeight] = useState(0.5);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const handleChangeWeight = (event) => {
    const newWeight = parseFloat(event.target.value);
    setWeight(newWeight);
    calculateValue(newWeight);
  };

  const calculateValue = (weight) => {
    const cost = (weight * 4.7).toFixed(1);
    setCalculatedValue(cost);
  };

  useEffect(() => {
    calculateValue(weight);
  }, []);

  return (
    <div className='tarif-container'>
        <div className='container-inner'>
          <div className='container-value'>
              <p>Жеткізу бағасы</p>
              <div className="progress-bar">${calculatedValue}</div>
          </div>
          <div className='container-weight'>
            <div className='container-weight-inner'>
              <span className='weight-text'>Тауардың салмағы</span>
              <div className="weight-display">{weight} kg</div>
            </div>
            <input className='progress-input'
                  type="range"
                  min={0}
                  max={32}
                  step={0.1}
                  value={weight}
                  onChange={handleChangeWeight}
                />
          </div>
        </div>
        <div className='per-kg-price'>1кг = $4.7</div>
    </div>
  );
};

export default ProgressBar;
