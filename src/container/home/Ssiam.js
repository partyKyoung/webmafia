import React, { Component } from 'react';
import moment from 'moment';

class Ssiam extends Component {
  constructor (props) {
    super(props);

    this.state = {
      date: ''
    }
  }

  componentDidMount() {
    this.carculater();
  }
  

  getDate () {
    let today = moment(new Date());
    const date = moment("2017-12-13");
    const date2 =  date.diff(today, 'days');
    let date3;
    let date4;
    let date5;
    
    today.add(date2, 'days');
    
    date3 = date.diff(today, 'hours');

    today.add(date3, 'hours');

    date4 = date.diff(today, 'minutes');

    today.add(date4, 'minutes');
    
    date5 = date.diff(today, 'seconds');    

    return `${date2}일 ${date3}시간 ${date4}분 ${date5}초`;
  }

  carculater () {
    let test = '';
    
    setInterval(() => { 
      test = this.getDate();

      this.setState({
        date: test
      })
    
    }, 1000);
  }

  render() {
    return (
      <div>
        준범이 백수 되기까지 남은 시간<br/>
        {this.state.date}<br/>
      </div>
    );
  }
}

export default Ssiam;