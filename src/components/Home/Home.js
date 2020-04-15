import React from "react";
import { connect } from 'react-redux';
import CommentList from "../../components/CommentList/CommentList";
import "./home.css";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import Pagination from '../Pagination/index'
import { allPokemon, reset } from '../../actions/actions';
import {withRouter} from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount () {
    this.props.handleAllPoke(10, (this.props.match.params.id - 1) * 10);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.resetCurrentPage();
      this.props.handleAllPoke(10, (this.props.match.params.id - 1) * 10);
    }
  }

  render () {
    let searchResults = this.props.pokeDetails;
    if (this.props.search) {
      searchResults = searchResults.filter(data => data.name.startsWith(this.props.search.text));
    }
    return (
      <React.Fragment>
        <div>jkwenkjwenfkj</div>
        <div>
          {this.props.pokeDetails.length > 0 ? (
            searchResults.length === 0 ? 'Nothing to Show'
              : searchResults.map(data => (
                <CommentList {...data} key={data.name} type={this.props.filter.type} />
              ))
          ) : this.props.allPokeName.length > 0 ? (
            this.props.allPokeName.map(data => (
              <Comment name={data.name} key={data.name} />
            ))
          ) : (
            <div className="spinner"/>
          )}
        </div>
        <Pagination />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allPokeName: state.allPokeDetails,
  pokeDetails: state.singleDetails,
  search: state.searchPoke,
  filter: state.filterPoke
});

const mapDispatchToProps = dispatch => ({
  handleAllPoke (resultPerPage, resultIndex) {
    dispatch(allPokemon(resultPerPage, resultIndex));
  },
  resetCurrentPage () {
    dispatch(reset());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
