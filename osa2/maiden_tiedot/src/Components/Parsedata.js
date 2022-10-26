import {Countries} from './Components.js'

const Parsedata = ({countries}) => {
    console.log(countries.length)
    console.log(countries)
    console.log(name)
    if(countries.length == 1) {
        <Countries
        name={countries[0].name.common}
        capital={countries[0].capital}
        area={countries[0].area}
        languages={countries[0].languages}
        flags={countries[0].flags.png}
        />
    }
}
  export {Parsedata};