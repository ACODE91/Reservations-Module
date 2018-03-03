import React from 'react';
import _ from 'underscore';
import dates from '../../data/datedata.js'

export default class DateSelect extends React.Component {
constructor(props){
    super(props);
}   
render(){ 
    return (
<select name="Select_0" tabIndex="3"> 
{dates.datesArray.map((opt) => {
return <option key={opt}>{opt}</option>

})}
</select>
    )        
}
}