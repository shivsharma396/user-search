import React, { Component } from "react";
import "./style.scss";
import UsersComp from "../usersComp/";
import { Container, Row, Col } from "react-bootstrap";

/**
 * SearchUserComp show search box
 *
 * @extends Component
 */
class SearchUserComp extends Component {
  /**
   * constructor SearchUserComp
   *
   * @param {object} props for comp
   */
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  /**
   * render Search User
   *
   * @return {JSX}
   */
  render() {
    const { searchText } = this.state;
    return (
      <Container className='serach-user-wrapper'>
        <Row className='justify-content-center'>
          <Col xs md='6' lg='4' xl='3'>
            <input
              placeholder='Search User'
              className='form-control form-control-md'
              value={searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </Col>
        </Row>
        <Row>
          <UsersComp text={searchText} />
        </Row>
      </Container>
    );
  }
}

export default SearchUserComp;
