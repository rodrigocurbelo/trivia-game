import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Main from '../../../../components/Core/Main';
import Title from '../../../../components/Core/Title';
import Layout from '../../../../components/Core/Layout';
import Option from '../../../../components/SelectableButtons/Option';
import Spacing from '../../../../components/Core/Spacing';
import ContinueButton from '../../../../components/Core/ContinueButton';
import * as routes from '../../../../shared/constants/routes';

export default function Capitals({
  setValidated,
  loadCountries,
  setOptionSelection,
  multipleOptionsGame: {
    pristine,
    countries,
    validated,
    winnerContinent,
    selectedOptions,
  },
}) {
  useEffect(() => {
    loadCountries();
  }, [ loadCountries ]);

  const router = useRouter();
  const getCountryText = country => `, ${country.name}, ${country.continentName}`;

  const wrongId = 1;

  const isItWrong = country => {
    const isItSelected = selectedOptions[country.id];

    if (isItSelected && country.continentName !== winnerContinent
       || !isItSelected && country.continentName === winnerContinent) {
      return true;
    }

    return false;
  };

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          {winnerContinent && (
            <Title centered>
              Which capitals belong in <b>{winnerContinent}</b>
            </Title>
          )}
        </Spacing>

        {countries.map(country => (
          <Option
            key={country.id}
            wrong={validated && wrongId === country.id}
            disabled={validated}
            selected={selectedOptions[country.id]}
            centeredText
            onClick={() => setOptionSelection(
              country.id,
              !selectedOptions[country.id]
            )}
          >
            {country.capital}

            {validated && (
              isItWrong(country)
                ? <b>{getCountryText(country)}</b>
                : getCountryText(country)
            )}
          </Option>
        ))}

        {!pristine && (
          <ContinueButton
            onValidateClick={() => setValidated(true)}
            onContinueClick={() => router.push(routes.MENU)}
            isValidate={!validated}
          />
        )}
      </Main>
    </Layout>
  );
}
