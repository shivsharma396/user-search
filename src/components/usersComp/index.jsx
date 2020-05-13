import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import nameInfo from "../../utils/nameInfo.json";
import { Table } from "react-bootstrap";

/**
 * UsersComp show user list
 *
 * @extends Component
 */
class UsersComp extends Component {
  /**
   * constructor UsersComp
   *
   * @param {object} props for comp
   */
  constructor(props) {
    super(props);
    this.state = {
      nameInfo
    };
  }

  /**
   * filteredNameList displays filtered name list
   *
   * @param {array} nameList array of name object list
   */
  filteredNameList = nameList => {
    if (nameList.length === 0) {
      return (
        <tr>
          <td colSpan='3'>No Data Found</td>
        </tr>
      );
    }
    return nameList.map(nameDetail => {
      return (
        <tr key={nameDetail._id}>
          <td>{nameDetail._id}</td>
          <td>{nameDetail.name}</td>
          <td>{nameDetail.gender}</td>
        </tr>
      );
    });
  };

  /**
   * searchInfo returns searched items
   *
   * @param {array} nameInfo array of all name object
   * @param {string} searchText input text
   */
  searchInfo = (nameInfo, searchText) => {
    return nameInfo.filter(
      nameDetail => searchText && nameDetail.name.toUpperCase().includes(searchText.toUpperCase())
    );
  };

  /**
   * render User List
   *
   * @return {JSX}
   */
  render() {
    const { nameInfo } = this.state;
    const { text: searchText } = this.props;
    const searchResult = this.searchInfo(nameInfo, searchText);
    return (
      <Fragment>
        <h3>User List</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{this.filteredNameList(searchResult)}</tbody>
        </Table>
      </Fragment>
    );
  }
}

UsersComp.propTypes = {
  text: PropTypes.string
};

export default UsersComp;
