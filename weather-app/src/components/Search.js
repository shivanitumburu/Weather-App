import React, { useState } from 'react';

function Searchbar({ Search, UserLocation }) {
  const [city, setcity] = useState('');

  const search_component = () => {
    Search(city);
  };

  return (
    <div className="Searchbar">
      <input 
        type="text" 
        placeholder="Enter the city" 
        value={city} 
        onChange={(e) => setcity(e.target.value)} 
      />
      <button onClick={search_component}>Search</button>
      <button onClick={UserLocation}><img src="https://img.icons8.com/?size=100&id=OBmVbH2qOGwK&format=png&color=000000" alt="location" width={'20px'} height={'20px'}></img>Use My Location</button>
    </div>
  );
}

export default Searchbar;
