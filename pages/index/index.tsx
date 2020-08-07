import React from 'react';
import { useRouter } from 'next/router';

import Main from '../../components/Core/Main';
import Title from '../../components/Core/Title';
import Layout from '../../components/Core/Layout';
import Option from '../../components/SelectableButtons/Option';
import Spacing from '../../components/Core/Spacing';
import * as routes from '../../shared/constants/routes';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Main>
        <Spacing bottom={2}>
          <Title centered>
            How well do you know your <b>world</b>
          </Title>
        </Spacing>

        <Option text="Flags" />
        <Option text="Capitals" onClick={() => router.push(routes.CAPITALS)} />
        <Option text="Find the anomaly" />
      </Main>
    </Layout>
  );
}
