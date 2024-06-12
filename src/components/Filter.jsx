import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { filter, onChange } = this.props;
    const searchId = nanoid();

    return (
      <div>
        <label htmlFor={searchId}>Find contact</label>
        <input
          type="text"
          id={searchId}
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}
