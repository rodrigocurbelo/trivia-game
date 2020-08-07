import React from 'react';

import MultipleOptionsGame from '../../../../components/Core/MultipleOptionsGame';
import { GameTypes } from '../../../../shared/constants/general';

export default function Flags({
  setValidated,
  loadCountries,
  setOptionSelection,
  multipleOptionsGame: {
    countries,
    validated,
    correctOnes,
    winnerContinent,
    selectedOptions,
  },
}) {
  const isItWrong = country => {
    return (selectedOptions[country.id]
      && country.continentName !== winnerContinent)
      || (!selectedOptions[country.id]
      && country.continentName === winnerContinent);
  };

  const getCountryText = country => (
    <>
      {country.name}
      {isItWrong(country)
        ? <b>, {country.continentName}</b>
        : `, ${country.continentName}`}
    </>
  );

  return (
    <MultipleOptionsGame
      data={countries}
      kind={GameTypes.Flags}
      title={`Which flags belong in ${winnerContinent}`}
      getText={getCountryText}
      loadData={loadCountries}
      isItWrong={isItWrong}
      validated={validated}
      correctOnes={correctOnes}
      setValidated={setValidated}
      winnerContinent={winnerContinent}
      selectedOptions={selectedOptions}
      setOptionSelection={setOptionSelection}
    />
  );
}
