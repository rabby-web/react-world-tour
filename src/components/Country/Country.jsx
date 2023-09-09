import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name,flags,population,area} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <div className='w-center'>
            <img className='img-height' src={flags.png} alt="" />
            </div>
            <hr />
            <h3 className='card-text'>Name: {name?.common}</h3>
            <p className='card-text'>Population: {population}</p>
            <p className='card-text'>Area: {area}</p>
            {visited ? 'I have Visited Country' : 'I want to Visit Country'}
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;