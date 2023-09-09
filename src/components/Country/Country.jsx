import './Country.css'

const Country = ({country}) => {
    const {name,flags} = country;
    console.log(country)
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common}</h3>
        </div>
    );
};

export default Country;