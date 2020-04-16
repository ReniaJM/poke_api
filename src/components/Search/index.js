import React from 'react';
import {connect} from 'react-redux';
import {searchResults} from '../../actions/actions';

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
      <div className="p-3">
        <div className="input-group mb-3">
          <input
            className="form-control"
            aria-label="Search Pokemon"
            aria-describedby="button-addon2"
            placeholder="Search Pokemon"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.handleSearch}
            type="text" />

            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Clear</button>
            </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchResult (text) {
    dispatch(searchResults(text));
  }
});

export default connect(null, mapDispatchToProps)(Container);
