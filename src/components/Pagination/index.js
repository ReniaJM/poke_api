import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCount } from '../../actions/actions';

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
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">

              <Link to='/page/1'>
                {parseInt(this.props.match.params.id, 10) === 1 ? null : (

                  <li className="page-item">First</li>
                )}
              </Link>

            <li className="page-item">
              {parseInt(this.props.match.params.id, 10) !== 1 && (
                <Link to={`/page/${parseInt(this.props.match.params.id, 10) - 1}`}>
                  <li className="page-item">Prev</li>
                </Link>
              )}
              {
                <div color='green'>
                  {this.props.match.params.id}
                </div>
              }
            </li>
            <li className="page-item">
              {parseInt(this.props.match.params.id, 10) !== pages && (
                <Link to={`/page/${parseInt(this.props.match.params.id, 10) + 1}`}>
                  <li className="page-item">Next</li>
                </Link>
              )}
            </li>

              <Link to={`/page/${pages}`}>
                {parseInt(this.props.match.params.id, 10) === pages ? null : (
                  <li className="page-item">Last</li>
                )}
              </Link>

          </ul>
        </nav>

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
