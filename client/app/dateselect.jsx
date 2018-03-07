import React from 'react';
import dates from '../../data/datedata';

export default function DateSelect(props) {
  return (
    <select name="Select_0" tabIndex="3">
      {dates.datesArray.map(opt => <option key={opt}>{opt}</option>)}
    </select>
  );
}
