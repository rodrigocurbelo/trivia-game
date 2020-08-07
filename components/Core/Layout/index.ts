import { connect } from 'react-redux';
import * as multipleOptionsGameActions from '../../../shared/redux/multipleOptionsGame';

import Layout from './components/Layout';

const mapStateToProps = (state) => {
  return {
    multipleOptionsGame: state.multipleOptionsGame,
  };
};

const mapDispatchToProps = {
  ...multipleOptionsGameActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
