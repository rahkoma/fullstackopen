import {Parsedata} from './Parsedata.js'

const Filter = ({newFilter, handleFilter}) =>
    <form>
        <div>find countries 
            <input
                value={newFilter}
                onChange={handleFilter}
            />
        </div>   
    </form>
  
const Weather = ({weather}) => {
  console.log(weather)
}

const Countries = ({countries, handleClick, capital, area, name, flag, language}) => {
  console.log(countries.length)
  console.log(countries)
  if(countries.length === 1) {
    return(
      <>
        <h1>{name}</h1>
        <div>capital {capital}</div>
        <div>area {area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(language).map( language =>
            <li key={language}> {language} </li>)}
        </ul>
        <img src={flag} alt="Flag" />
      </>
    )}

  else if (countries.length <= 10 && countries.length > 1) {
    return(
      <>
      {countries.map(country =>
          <div key={country.name.common}> {country.name.common} <button value={country.name.common} onClick={handleClick}>show</button></div>
          )}
      </>
    )}
  else {
    return(
      <p>Too many matches, specify another filter</p>
      )}
}

export {Filter, Countries, Weather};