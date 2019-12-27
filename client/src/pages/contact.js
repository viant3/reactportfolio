import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Guests extends Component {
  state = {
    Name: [],
    Email: "",
    Message: ""
  };

  componentDidMount() {
    this.loadGuests();
  }

  loadGuests = () => {
    API.getGuests()
      .then(res =>
        this.setState({Guest: res.data, Name: "", Email: "", Message: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGuest = id => {
    API.deleteGuest(id)
      .then(res => this.loadGuests())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Name && this.state.Email) {
      API.saveGuest({
        Name: this.state.Name,
        Email: this.state.Email,
        Message: this.state.Message
      })
        .then(res => this.loadGuests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Leave A Message</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.Name}
                onChange={this.handleInputChange}
                name="Name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.Email}
                onChange={this.handleInputChange}
                name="Email"
                placeholder="Email (required)"
              />
              <TextArea
                value={this.state.Message}
                onChange={this.handleInputChange}
                name="Message"
                placeholder="Message (Optional)"
                cols="30" rows="5"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Names of Visitors</h2>
            </Jumbotron>
            {this.state.length ? (
              <List>
                {this.state.Guests.map(Guest => (
                  <ListItem key={Guest._id}>
                   
                      <strong>
                        {Guest.Name}
                      </strong>
                   
                    <DeleteBtn onClick={() => this.deleteGuest(Guest._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Guests Yet</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Guests;
