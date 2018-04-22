import React from 'react';

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    };
  }

  handleChange(e) {
    this.props.appStatePassed.people = e.target.value;
  }

  render() {
    const peopleArray = ['1 person'];

    const populateArray = function () {
      for (let i = 2; i < 21; i++) {
        peopleArray.push(`For ${i.toString()}`);
      }

      peopleArray.push('Larger Party');
    };

    populateArray();

    return (
      <select
        name="Select_0 selectClass"
        className="peopleSelect dtp-picker-selector"
        value={this.state.selectValue}
        onChange={this.handleChange.bind(this)}
      >
        {peopleArray.map(opt => <option value={opt} key={opt}>{opt}</option>)}
      </select>
    );
  }
}
