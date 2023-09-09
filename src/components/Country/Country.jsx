import './Country.css'

const Country = ({country}) => {
    const {name,flags,population,area} = country;
    console.log(country)
    return (
        <div className='country'>
            <div className='w-center'>
            <img className='img-height' src={flags.png} alt="" />
            </div>
            <hr />
            <h3>Name: {name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;