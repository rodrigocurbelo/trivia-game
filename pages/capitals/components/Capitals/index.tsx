import React from 'react';
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
  setOptionSelection,
  capitals: {
    capitals,
  },
  multipleOptionsGame: {
    selectedOptions,
    pristine,
    validated,
  },
}) {
  const router = useRouter();
  const getCountryText = city => `, ${city.country}`;

  const wrongId = 1;

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          <Title centered>
            Which capitals belongs in <b>Europe</b>
          </Title>
        </Spacing>

        {capitals.map(city => (
          <Option
            key={city.id}
            wrong={validated && wrongId === city.id}
            disabled={validated}
            selected={selectedOptions[city.id]}
            onClick={() => setOptionSelection(
              city.id,
              !selectedOptions[city.id]
            )}
          >
            {city.name}

            {validated && (
              wrongId === city.id
                ? <b>{getCountryText(city)}</b>
                : getCountryText(city)
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
