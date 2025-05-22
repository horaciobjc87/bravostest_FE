import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InfoTable from './components/InfoTable';
import InfoChart from './components/InfoChart';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchBreeds = async () => {
    const res = await fetch("http://localhost:5000/breeds")
    const resJson = await res.json()
    if(resJson && resJson.data)
      setData(resJson.data)
  }

  const handleFilterChange = (e) => setFilter(e.target.value.toLowerCase());

  const filteredData = data.filter((breed) =>
    breed.attributes.name.toLowerCase().includes(filter)
  );

  return (
    <div className="container">
      <h1 className="font-bold">Breeds View</h1>
      <button className="btn btn-primary mb-3" onClick={fetchBreeds}>
        Retrieve Data
      </button>
      <input
      class="form-control"
        type="text"
        placeholder="Filter by breed"
        onChange={handleFilterChange}
      />
      <InfoTable data={filteredData}/>
      <InfoChart data={filteredData}/>
    </div>
  );
}

export default App;
