import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import styles from './styles.scss';
import Main from '../Main';
import Title from '../Title';
import Flag from '../../SelectableButtons/Flag';
import Option from '../../SelectableButtons/Option';
import Layout from '../Layout';
import Spacing from '../Spacing';
import ContinueButton from '../ContinueButton';
import { GameTypes } from '../../../shared/constants/general';
import * as routes from '../../../shared/constants/routes';
import Text from '../Text';

export default function MultipleOptionsGame({
  data,
  kind,
  title,
  getText,
  loadData,
  isItWrong,
  validated,
  correctOnes,
  setValidated,
  winnerContinent,
  selectedOptions,
  setOptionSelection,
}) {
  useEffect(() => {
    loadData();
  }, [ loadData ]);

  const getContent = () => {
    if (kind === GameTypes.Options) {
      return (
        <div className={classNames(styles.container, styles.optionsContainer)}>
          {data.map(option => (
            <Option
              key={option.id}
              wrong={isItWrong(option)}
              disabled={validated}
              selected={selectedOptions[option.id]}
              centeredText
              onClick={() => setOptionSelection(
                option.id,
                !selectedOptions[option.id]
              )}
            >
              {option.capital}

              {validated && (
                isItWrong(option)
                  ? <b>{getText(option)}</b>
                  : getText(option)
              )}
            </Option>
          ))}
        </div>
      );
    }

    return (
      <div className={classNames(styles.container, styles.flagsContainer)}>
        {data.map(country => (
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
            {getText(country)}
          </Flag>
        ))}
      </div>
    );
  };

  const router = useRouter();

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          {winnerContinent && (
            <Title centered>{title}</Title>
          )}
        </Spacing>

        <div className={styles.wrapper}>
          {getContent()}
        </div>

        {validated && (
          <div className={styles.pointsContainer}>
            <Title><b>{correctOnes}</b> / {data.length}</Title>
          </div>
        )}

        <ContinueButton
          onValidateClick={() => setValidated(data, isItWrong)}
          onContinueClick={() => router.push(routes.MENU)}
          isValidate={!validated}
        />
      </Main>
    </Layout>
  );
}
