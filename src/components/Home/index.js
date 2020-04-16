import React from "react";
import { connect } from 'react-redux';
import PokemonList from "../PokemonList/PokemonList";
import Pagination from '../Pagination/index'
import { allPokemon, reset } from '../../actions/actions';
import {withRouter} from 'react-router-dom';
import styled ,{keyframes } from 'styled-components';
import PropTypes from "prop-types";

const spinnerAnim = keyframes`

  0%{
    transform: rotateZ(0deg);
  }
  25%{
    transform: rotateZ(90deg);
  }
  50%{
    transform: rotateZ(180deg);
  }
  75%{
    transform: rotateZ(270deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`;

export const Spinner = styled.div`
  border: 2px double #007bff;
  padding: .5rem;
  animation:${spinnerAnim} ease .5s infinite;
  background: transparent;
  width: 4em;
  height: 4em;
  border-radius: 100vw;
  border-top-width: 0;
  border-bottom-width: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`;

export const Header = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
  color: #495057;
`;


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
      <>
        <Header>Find Your Pokemon</Header>
        <div className="container">
          <div className="row">
          {this.props.pokeDetails.length > 0 ? (
            searchResults.length === 0 ? 'Nothing to Show'
              : searchResults.map(data => (
                <PokemonList {...data} key={data.name} type={this.props.filter.type} />
              ))
          )
            : (
            <Spinner/>
          )}
          </div>
        </div>
        <Pagination />
      </>
    );
  }
}

HomePage.propTypes = {
  handleAllPoke: PropTypes.func.isRequired,
  resetCurrentPage: PropTypes.func.isRequired,
  pokeDetails: PropTypes.array.isRequired,
  allPokeName: PropTypes.array.isRequired,
  filter: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
};

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
