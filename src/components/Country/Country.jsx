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
            <h3 className='card-text'>Name: {name?.common}</h3>
            <p className='card-text'>Population: {population}</p>
            <p className='card-text'>Area: {area}</p>
            <button>Visited</button>
        </div>
    );
};

export default Country;