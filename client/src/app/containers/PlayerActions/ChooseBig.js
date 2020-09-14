import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setGameState } from '../../../store/actions/game';

const ChooseBig = props => {
  
  const { id } = props;

  const _setBig = id => {
    const { setBig } = props;
    setBig(id);
  }

  return (
    <>
      <button onClick={() => console.log(id)}>Go Big</button>
      <button onClick={id => console.log('Pass')}>Pass</button>
    </>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setBig: () => console.log('Big'),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBig);
