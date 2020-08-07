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
  loadFlags,
  setValidated,
  setOptionSelection,
  flags: {
    flags,
    winnerContinent,
  },
  multipleOptionsGame: {
    selectedOptions,
    pristine,
    validated,
  },
}) {
  useEffect(() => {
    loadFlags();
  }, [ loadFlags ]);

  const router = useRouter();

  const isItWrong = flag => {
    if (selectedOptions[flag.id] && flag.continentName !== winnerContinent
       || !selectedOptions[flag.id] && flag.continentName === winnerContinent) {
      return true;
    }

    return false;
  };

  const getCountryText = flag => (
    <>
      {flag.name}
      <b>, {flag.continentName}</b>
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

        <div className={styles.flagsContainer}>
          {flags.map(flag => (
            <Flag
              key={flag.id}
              wrong={validated && (isItWrong(flag))}
              hideText={!validated}
              disabled={validated}
              selected={selectedOptions[flag.id]}
              alpha2Code={flag.alpha2Code}
              onClick={() => setOptionSelection(
                flag.id,
                !selectedOptions[flag.id]
              )}
            >
              {getCountryText(flag)}
            </Flag>
          ))}
        </div>

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
