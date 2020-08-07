import React from 'react';
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
  setOptionSelection,
  flags: {
    flags,
  },
  multipleOptionsGame: {
    selectedOptions,
    pristine,
    validated,
  },
}) {
  const router = useRouter();
  const getCountryText = flag => flag.country;

  const wrongId = 1;

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          <Title centered>
            Which flags belong in <b>Europe</b>
          </Title>
        </Spacing>

        <div className={styles.flagsContainer}>
          {flags.map(flag => (
            <Flag
              key={flag.id}
              wrong={validated && (wrongId === flag.id)}
              hideText={!validated}
              disabled={validated}
              selected={selectedOptions[flag.id]}
              countryCode={flag.countryCode}
              text={
                wrongId === flag.id
                  ? <b>{getCountryText(flag)}</b>
                  : getCountryText(flag)
              }
              onClick={() => setOptionSelection(
                flag.id,
                !selectedOptions[flag.id]
              )}
            />
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
