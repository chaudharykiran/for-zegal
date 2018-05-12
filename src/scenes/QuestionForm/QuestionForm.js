import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import FormField from '../../components/FormField';
import questions from '../../questions';
import * as actionCreators from './actionCreators';
import '../../style.css';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleIndex: 0,
    };
  }

  onChange = (e, data) => {
    const { name, value } = data;

    this.setState(() => ({
      [name]: value,
    }));
  }

  onSubmit = () => {
    this.setState(prevState => ({
      visibleIndex: prevState.visibleIndex + 1,
    }));

    this.props.actions.addAnswer(this.state);

    const sizeOfQuestions = questions.questions.length;

    if ((sizeOfQuestions - 1) <= this.state.visibleIndex) {
      this.props.history.push('/result');
    }
  }


  renderQuestion = () =>
    // for every question, read title and fields
    questions.questions.map((question, index) => {
      const { title, fields } = question;
      const disableSetForIndex0 = !this.state.first_name ||
                            !this.state.last_name || !this.state.email || !this.state.phone_number;
      const disableSetForIndex1 = !this.state.street_address ||
                            !this.state.post_code || !this.state.country;

      return (
        <Segment stacked key={title} className={(index !== this.state.visibleIndex) ? 'hide-block' : ''}>
          <Header as="h2" color="teal" textAlign="center">
            {' '}{title}
          </Header>
          {
            fields.map(field => (
              <FormField field={field} onChange={this.onChange} key={field.name} />
            ))
          }
          <Button
            color="teal"
            fluid
            size="large"
            onClick={this.onSubmit}
            disabled={
              (index === 0) ? disableSetForIndex0 : disableSetForIndex1
            }
          >
            Submit
          </Button>
        </Segment>
      );
    })


  render() {
    return (
      <div className="login-form">
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {this.renderQuestion()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStateToProps = state => ({
  answer: state.AnswerReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
