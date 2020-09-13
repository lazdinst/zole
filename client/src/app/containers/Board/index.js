import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Cards from '../Cards';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { center } = this.props;
    return (
      <>
        <Cards cards={center || []} />
      </>
      )
  }
}

const mapStateToProps = state => ({
  center: state.game.center,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
