'use strict';

const co = require('co');
const errors = require('restify-errors');
var moment = require('moment');

const countryHelper = require('../../lib/country-helper');

exports.getCountries = co.wrap(function* getCountries(req, res, next) {
  try {
    countryHelper.getCountries().then(countries => {
      res.json(countries);
      return next();
    });
  } catch (err) {
    return next(new errors.InternalServerError(err, 'Server error retrieving countries.'));
  }
});

exports.getPopulationOnDate = co.wrap(function* getPopulationOnDate(req, res, next) {
  try {
    let country = req.params.country;

    // To take first letter capital of country 
    country = country.replace(/^./, country[0].toUpperCase());

    let date = req.params.date;

    // Given API valid dates are 2013-01-01 to 2022-12-31 
    if (!moment(date).isBetween('2013-01-01', '2022-12-31')) {
      return next(new errors.InternalServerError("Date is not in rage '2013-01-01' - '2022-12-31'"));
    }

    countryHelper.getPopulationOnDate(country, date).then(population => {
      res.json(population);
      return next();
    });
  } catch (err) {
    return next(new errors.InternalServerError(err, 'Server error retrieving population.'));
  }
});
