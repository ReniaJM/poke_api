import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCount } from '../../actions/actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
   margin: 1rem;
   text-align: center;
   flex: 1 0 10rem;
`;

export const PageNumber = styled.div`
  display: inline-block;
  padding: .4em .6em;
  margin: .2em;
  overflow: hidden;
  background: white;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  cursor:pointer;
  }
`;

class Pagination extends Component {
  componentDidMount () {
    this.props.getTotalPokemons();
  }

  render () {
    let pages = 0;
    if (this.props.count !== 0) {
      pages = Math.ceil(this.props.count / 12);
    }
    return (
      <Container>
          <Link to='/page/1'>
            {parseInt(this.props.match.params.id, 10) === 1 ? null : (

              <PageNumber color='#6c757d'>First </PageNumber>
            )}
          </Link>
          {parseInt(this.props.match.params.id, 10) !== 1 && (
            <Link to={`/page/${parseInt(this.props.match.params.id, 10) - 1}`}>
              <PageNumber color='#6c757d'>Prev </PageNumber>
            </Link>
          )}
          {
            <PageNumber color='#dc3545'>
              {this.props.match.params.id}
            </PageNumber>
          }
          {parseInt(this.props.match.params.id, 10) !== pages && (
            <Link to={`/page/${parseInt(this.props.match.params.id, 10) + 1}`}>
              <PageNumber color='#6c757d'>Next</PageNumber>
            </Link>
          )}
          <Link to={`/page/${pages}`}>
            {parseInt(this.props.match.params.id, 10) === pages ? null : (
              <PageNumber color='#6c757d'>Last</PageNumber>
            )}
          </Link>
      </Container>
    );
  }
}


Pagination.propTypes = {
  getTotalPokemons: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

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
