import React from 'react';

import { GameTypes } from '../../../../shared/constants/general';
import MultipleOptionsGame from '../../../../components/Core/MultipleOptionsGame';

export default function Capitals({
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
  const getCountryText = country => `, ${country.name}, ${country.continentName}`;

  const isItWrong = country => {
    const isItSelected = selectedOptions[country.id];

    return (isItSelected && country.continentName !== winnerContinent)
       || (!isItSelected && country.continentName === winnerContinent);
  };

  return (
    <MultipleOptionsGame
      data={countries}
      kind={GameTypes.Options}
      title={`Which cities belong in ${winnerContinent}`}
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
