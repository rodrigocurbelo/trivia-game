import { connect } from 'react-redux';
import * as capitalsActions from './redux/capitals';
import * as multipleOptionsGameActions from '../../shared/redux/multipleOptionsGame';

import Capitals from './components/Capitals';

const mapStateToProps = (state) => {
  return {
    capitals: state.capitals,
    multipleOptionsGame: state.multipleOptionsGame,
  };
};

const mapDispatchToProps = {
  ...capitalsActions,
  ...multipleOptionsGameActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Capitals);
