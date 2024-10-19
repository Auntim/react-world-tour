import React, { useEffect, useState } from 'react'
import Country from './country/country'

function Countries() {
    const [countries, setcountriues] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountriues(data))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <hr />
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    )
}

export default Countries
