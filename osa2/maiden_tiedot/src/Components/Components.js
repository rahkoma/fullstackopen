const Filter = ({newFilter, handleFilter}) =>
    <form>
        <div>find countries 
            <input
                value={newFilter}
                onChange={handleFilter}
            />
        </div>   
    </form>


const Countries = ({countries}) => {
  console.log(countries.length)
  console.log(countries)
  if(countries.length == 1) {
    return(
      <>
        <h1>{countries[0].name.common}</h1>
        <div>capital {countries[0].capital}</div>
        <div>area {countries[0].area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(countries[0].languages).map( language =>
            <li key={language}> {language} </li>)}
        </ul>
        <img src={countries[0].flags.png} alt="Flag" />
        
      </>
    )}

  else if (countries.length <= 10 && countries.length > 1) {
    return(
      <>
      {countries.map(country =>
          <div key={country.name.common}> {country.name.common} </div>
          )}
      </>
    )}
  else {
    return(
      <p>Too many matches, specify another filter</p>
      )}
}

export {Filter, Countries};