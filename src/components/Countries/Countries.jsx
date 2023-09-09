import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlags = flags =>{
        console.log('flags add')
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }

    // remove item from a array list in a state
    // use filter to select all the elements expect the one you want to remove

    return (
        <div>
            <h3 className="header-text">React Countries Tour</h3>
            <div className="visit-country">
                <h5>Visited Country: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.flatMap(country => <li  key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* visited flags */}
            <div className="flags-container">
                {
                    visitedFlags.map((flags,idx) => <img key={idx} src={flags}></img>)
                }

            </div>
            <br />
            <div className="country-container">
            {
                countries.map(country =><Country key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;