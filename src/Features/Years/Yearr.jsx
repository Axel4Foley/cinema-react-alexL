import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const years = [2009, 2010, 2011, 2012, 2013,2014, 2015, 2016,2017, 2018, 2019, 2020, 2021, 2022, 2023];

export function Yearr() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedYear = event.target.value;
    if (selectedYear) {
      navigate(`/year/${selectedYear}`);
    }
  };

  return (
    <div className="centered-content">
      <div style={{ position: 'absolute', color: "green", top: 10, right: 10 }}>
        <Link to="/">
          <button style={{ backgroundColor: "red", color: "white" }}>Back to home</button>
        </Link>
      </div>
      <h1 style={{ color: "white", marginTop: "20px" }}>Seleziona un anno</h1>
      <div>
        <select onChange={handleSelectChange} defaultValue="">
          <option value="" disabled>Seleziona un anno</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
