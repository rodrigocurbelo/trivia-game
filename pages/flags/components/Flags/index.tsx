import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.scss';
import Main from '../../../../components/Core/Main';
import Title from '../../../../components/Core/Title';
import Layout from '../../../../components/Core/Layout';
import Spacing from '../../../../components/Core/Spacing';
import ContinueButton from '../../../../components/Core/ContinueButton';
import * as routes from '../../../../shared/constants/routes';
import Flag from '../../../../components/SelectableButtons/Flag';

export default function Flags({
  setValidated,
  loadCountries,
  setOptionSelection,
  multipleOptionsGame: {
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

  const isItWrong = country => {
    return (selectedOptions[country.id]
      && country.continentName !== winnerContinent)
      || (!selectedOptions[country.id]
      && country.continentName === winnerContinent);
  };

  const getCountryText = country => (
    <>
      {country.name}
      <b>, {country.continentName}</b>
    </>
  );

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          {winnerContinent && (
            <Title centered>
              Which flags belong in <b>{winnerContinent}</b>
            </Title>
          )}
        </Spacing>

        <div className={styles.flagsWrapper}>
          <div className={styles.flagsContainer}>
            {countries.map(country => (
              <Flag
                key={country.id}
                wrong={validated && (isItWrong(country))}
                hideText={!validated}
                disabled={validated}
                selected={selectedOptions[country.id]}
                alpha2Code={country.alpha2Code}
                onClick={() => setOptionSelection(
                  country.id,
                  !selectedOptions[country.id]
                )}
              >
                {getCountryText(country)}
              </Flag>
            ))}
          </div>
        </div>

        <ContinueButton
          onValidateClick={() => setValidated(true)}
          onContinueClick={() => router.push(routes.MENU)}
          isValidate={!validated}
        />
      </Main>
    </Layout>
  );
}
