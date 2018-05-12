import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Grid } from 'semantic-ui-react';

class Result extends Component {
  render() {
    return (

      <Grid celled>
        <Grid.Row>
          <Header as="h2" color="teal" textAlign="center">
            Tell us about yourself
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Name
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {`${this.props.answer.first_name} ${this.props.answer.last_name}`}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Email
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {this.props.answer.email}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Phone Number
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {this.props.answer.phone_number}
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Header as="h2" color="teal" textAlign="center">
            Where do you live?
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Street Address
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {this.props.answer.street_address}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Postal Code
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {this.props.answer.post_code}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h2" color="teal" textAlign="center">
              Country
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              {this.props.answer.country}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  answer: state.AnswerReducer.answer,
});

export default connect(mapStateToProps)(Result);
