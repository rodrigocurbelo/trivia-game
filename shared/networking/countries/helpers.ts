import { CONTINENTS, FILTER_BY_CONTINENT } from './constants';
import {
  NUMBER_OF_OPTIONS_PER_GAME,
  MAX_NUMBER_OF_CONTINENTS_AS_OPTIONS,
} from '../../constants/general';

type AmountContinentPairType = {
  continentName: string,
  amountOfCountriesForContinent: number,
};

// This helper will return a random number of countries for each randomly
// selected continent.
export function getAmountOfCountriesPerContinent(): AmountContinentPairType[] {
  const continents: AmountContinentPairType[] = [];
  let remainingNumberOfCountries = NUMBER_OF_OPTIONS_PER_GAME;

  const getAmountContinentPair = (
    remainingContinents: string[],
    decidedAmount?: number
  ) => {
    const northAmericaIndex: number = remainingContinents.indexOf(
      CONTINENTS.northAmerica
    );

    // The API that we're currently using only returns 2 countries for North
    // America, so we need to process it first. Otherwise the number of
    // remaining countries could be more than 2 if decidedAmount is more
    // than 2. Otherwise it wouldn't be possible to force a maximum amount of
    // continents.
    const randomContinentName: string = remainingContinents[
      northAmericaIndex === -1
        ? Math.floor(Math.random() * remainingContinents.length)
        : northAmericaIndex
    ];

    let amountOfCountries: number;

    if (randomContinentName === CONTINENTS.northAmerica) {
      // The API that we're currently using only returns 2 countries for North
      // America. If we add more, the query will still get us Canada and the US
      // only. Because of this issue, North American countries are coming up a lot,
      // so instead of tring 0, 1 or 2, we simply go 0 or 1. Meaning that there
      // will either be 1 or none.
      amountOfCountries = Math.round(Math.random() * 1);
    } else {
      amountOfCountries = decidedAmount
        || Math.ceil(Math.random() * (remainingNumberOfCountries - 1));
    }

    remainingNumberOfCountries -= amountOfCountries;

    if (
      remainingNumberOfCountries >= 0
      && continents.length + 1 <= MAX_NUMBER_OF_CONTINENTS_AS_OPTIONS
    ) {
      continents.push({
        continentName: randomContinentName,
        amountOfCountriesForContinent: amountOfCountries,
      });

      const listWithoutLastContinent = remainingContinents.filter(
        elm => elm !== randomContinentName
      );

      // If there is more than 1 continent left to process, we call the same
      // function again. Which will generate a random amount of countries.
      // to be added.
      if (continents.length < MAX_NUMBER_OF_CONTINENTS_AS_OPTIONS - 1) {
        return getAmountContinentPair(listWithoutLastContinent);
      }

      // If there is more than 1 continent left to process, we call the same
      // function again. But we force it to use the remaining number of
      // countries. That way, it won't exceed the maximum set.
      if (remainingNumberOfCountries) {
        return getAmountContinentPair(
          listWithoutLastContinent,
          remainingNumberOfCountries,
        );
      }
    }

    return continents;
  };

  return getAmountContinentPair(Object.keys(FILTER_BY_CONTINENT))
    .filter(elm => elm.amountOfCountriesForContinent);
}
