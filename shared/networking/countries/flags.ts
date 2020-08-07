import { gql } from '@apollo/client';

import apolloClient from '../apolloClient';
import { FILTER_BY_CONTINENT, LIST_OF_COUNTRY_ORDER_BY } from './constants';
import { getAmountOfCountriesPerContinent } from './helpers';

function getRandomCountryOrderBy() {
  const getOneOrderBy = () => LIST_OF_COUNTRY_ORDER_BY[
    Math.floor(Math.random() * LIST_OF_COUNTRY_ORDER_BY.length)
  ];

  return [getOneOrderBy(), getOneOrderBy()];
}

function sendQuery(continentName, amountOfCountries) {
  const COUNTRIES_QUERY = gql`
    query countries($filter: _CountryFilter!, $amount: Int!, $orderBy: [_CountryOrdering]) {
      Country(filter: $filter, orderBy: $orderBy, first: $amount) {
        _id
        name
        capital
        alpha2Code
      }
    }
  `;

  return apolloClient.query({
    query: COUNTRIES_QUERY,
    variables: {
      amount: amountOfCountries,
      filter: FILTER_BY_CONTINENT[continentName],
      orderBy: getRandomCountryOrderBy(),
    },
  });
}

export function getCountriesAndContinentWinner() {
  const listOfAmountContinentPairs = getAmountOfCountriesPerContinent();

  const winnerContinent = listOfAmountContinentPairs[
    Math.floor(Math.random() * listOfAmountContinentPairs.length)
  ].continentName;

  return Promise.all(
    listOfAmountContinentPairs.map(amountContinentPair =>
      sendQuery(
        amountContinentPair.continentName,
        amountContinentPair.amountOfCountriesForContinent
      )
        .then(data => {
          return data.data.Country.map(country => ({
            ...country,
            // eslint-disable-next-line no-underscore-dangle
            id: country._id,
            continentName: amountContinentPair.continentName,
          }));
        })
    )
  ).then(result => {
    return {
      winnerContinent,
      countries: result.reduce(
        (accumulator, item) => [...item, ...accumulator],
        [],
      ),
    };
  });
}
