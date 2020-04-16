import React from 'react';
import {connect} from 'react-redux';

import {searchResults} from '../../actions/actions';
// import {Input, Button} from '../../utils/styleComponents';
// import Logo from './logo.png';

// const Nav = styled.div`
//   background:#dfe4ea;
//   overflow: hidden;
//   margin-bottom: 1em;
//   padding: .6em;
// `;
//
// const ImageContainer = styled.div`
//   overflow: hidden;
//   width: 7%;
//   padding: .2em;
//   float: left;
//   @media (max-width: 860px) {
//     width: 20%;
//   }
// `;
//
// const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   vertical-align: middle;
// `;
//
// const ContentContainer = styled.div`
//   overflow: hidden;
//   display: inline-block;
//   float: right;
// `;

class Container extends React.Component {
  constructor () {
    super();
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      text: event.target.value
    }, () => this.props.getSearchResult(this.state.text));
  }
  render () {
    return (
      <>
          <form className="form-inline">
            <div className="form-group mx-sm-3 mt-3">
              <label htmlFor="search" className="sr-only">Search Pokemon</label>
              <input
                className="form-control"
                id="search"
                placeholder="Search Pokemon"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyPress={this.handleSearch}
                type="text" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Confirm</button>
          </form>
        {this.props.children}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchResult (text) {
    dispatch(searchResults(text));
  }
});

export default connect(null, mapDispatchToProps)(Container);
