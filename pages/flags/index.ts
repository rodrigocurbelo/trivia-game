import { connect } from 'react-redux';
import * as flagsActions from './redux/flags';
import * as multipleOptionsGameActions from '../../shared/redux/multipleOptionsGame';

import Flags from './components/Flags';

const mapStateToProps = (state) => {
  return {
    flags: state.flags,
    multipleOptionsGame: state.multipleOptionsGame,
  };
};

const mapDispatchToProps = {
  ...flagsActions,
  ...multipleOptionsGameActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Flags);
