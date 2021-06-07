'use strict';

const fetch = require("node-fetch");
const errors = require('restify-errors');

// const countries = [
//   'Afghanistan',
//   'AFRICA',
//   'Albania',
//   'Algeria',
//   'Angola',
//   'Antigua and Barbuda',
//   'Arab Rep of Egypt',
//   'Argentina',
//   'Armenia',
//   'Aruba',
//   'ASIA',
//   'Australia',
//   'Australia/New Zealand',
//   'Austria',
//   'Azerbaijan'
// ];

exports.getCountries = async function getCountries() {
  try {
    // Fetch Country data from given API
    const countries = await fetch(
      "https://d6wn6bmjj722w.population.io/1.0/countries"
    );
    let response = await countries.json();
    console.log("countries", response.countries)
    return response.countries;

  } catch (err) {
    return new errors.InternalServerError(err, 'Server error retrieving population.')
  }
};


exports.getPopulationOnDate = async function getPopulationOnDate(country, date) {
  try {
    // Fetch Population data from given API
    const population = await fetch(
      `https://d6wn6bmjj722w.population.io/1.0/population/${country}/${date}`
    );
    let response = await population.json();
    console.log("countries", response.total_population)
    return response.total_population;
  } catch (error) {
    return new errors.InternalServerError(err, 'Server error retrieving population.')
  }
};
