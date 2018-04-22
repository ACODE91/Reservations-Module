import React from 'react';

export default function RestaurantDisplay(props) {
  let filterArray = props.appState.timesAvailable.filter((time) => {
    function timeRange(time12h) {
      if (time12h.length === 7) {
        time12h = `0${  time12h}`;
      }

      let [time, modifier] = time12h.split(' ');

      const [hours, minutes] = time.split(':');

      const times = {};

      times['30MinutesAhead'] = `${time12h.slice(0, 2)  }:${  JSON.stringify(parseInt(time12h.slice(3)) + 30)  } ${  modifier}`;
      times['30MinutesBefore'] = `${time12h.slice(0, 2)  }:${  JSON.stringify(parseInt(time12h.slice(3)) - 30)  } ${  modifier}`;

      if (times['30MinutesAhead'].slice(3, 5) === '60') {
        let convertedHour = JSON.stringify(parseInt(times['30MinutesAhead'].slice(0, 2)) + 1);
        const convertedMinutes = '00';

        if (convertedHour === '13') {
          convertedHour = '1';
        }
        if (parseInt(convertedHour) > 12) {
          defaultModifier = 'PM';
        }
        times['30MinutesAhead'] = `${convertedHour  }:${   convertedMinutes  } ${  modifier}`;
      }

      if (times['30MinutesBefore'].slice(3, 6) === '-30') {
        let convertedHour = JSON.stringify(parseInt(times['30MinutesBefore'].slice(0, 2) - 1));

        if (time12h === '12:00 AM') {
          convertedHour = '11';
          modifier = 'PM';
        }

        if (time12h === '01:00 PM' || time12h === '01:00 AM') {
          convertedHour = '12';
        }

        const convertedMinutes = '30';

        times['30MinutesBefore'] = `${convertedHour  }:${   convertedMinutes  } ${  modifier}`;
      } else {
        times['30MinutesBefore'] = `${times['30MinutesBefore'].slice(0,2)  }:00 ${  modifier}`;
      }

      if (times['30MinutesBefore'].length === 8) {
        times['30MinutesBefore'] = times['30MinutesBefore'].slice(1);
      }
      if (times['30MinutesAhead'].length === 8) {
        times['30MinutesAhead'] = times['30MinutesAhead'].slice(1);
      }

      return times;
    }
    if (time === props.appState.time || time === timeRange(props.appState.time)['30MinutesAhead'] 
    || time === timeRange(props.appState.time)['30MinutesBefore']) {
      return time;
    }
  });
  console.log('is this testing?', filterArray);
  return (
    <div className="times">
      {
        filterArray.map((matchedTime) => {
          return <div key={matchedTime} className="rest-row-times-btn timeslot">{matchedTime}</div>
        }
        )
      }
    </div>
  );
}

