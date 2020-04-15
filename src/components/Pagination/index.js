import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCount } from '../../actions/actions';

// import { PageNumber, ActivePageNumber, PageContainer } from '../../utils/styleComponents';

class Pagination extends React.Component {
  componentDidMount () {
    this.props.getTotalPokemons();
  }

  render () {
    let pages = 0;
    if (this.props.count !== 0) {
      pages = Math.ceil(this.props.count / 12);
    }

    return (
      <div>
        <Link to='/page/1'>
          {parseInt(this.props.match.params.id, 10) === 1 ? null : (
            <div color='green'>First</div>
          )}
        </Link>
        {parseInt(this.props.match.params.id, 10) !== 1 && (
          <Link to={`/page/${parseInt(this.props.match.params.id, 10) - 1}`}>
            <div color='green'>Prev</div>
          </Link>
        )}
        {
          <div color='green'>
            {this.props.match.params.id}
          </div>
        }
        {parseInt(this.props.match.params.id, 10) !== pages && (
          <Link to={`/page/${parseInt(this.props.match.params.id, 10) + 1}`}>
            <div color='green'>Next</div>
          </Link>
        )}
        <Link to={`/page/${pages}`}>
          {parseInt(this.props.match.params.id, 10) === pages ? null : (
            <div color='green'>Last</div>
          )}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.totalCount
});

const mapDispatchToProps = dispatch => ({
  getTotalPokemons () {
    dispatch(getCount());
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Pagination)
);
