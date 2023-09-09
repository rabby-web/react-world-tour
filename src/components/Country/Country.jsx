import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <div className='w-center'>
            <img className='img-height' src={flags.png} alt="" />
            </div>
            <hr />
            <h3 className='card-text'>Name: {name?.common}</h3>
            <p className='card-text'>Population: {population}</p>
            <p className='card-text'>Area: {area}</p>
            {visited ? 'I have Visited Country' : 'I want to Visit Country'}
            <div className='btn-group'>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flag</button>
            </div>
        </div>
    );
};

export default Country;