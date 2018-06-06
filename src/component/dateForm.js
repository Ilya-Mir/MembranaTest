import React from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { format} from '../actions/date';


class DateForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const {startDate} = this.state;
    const {currentFormat, setFormat} = this.props;
    return <div className="container">
            <div className="button-wrapper">
              <button onClick={() => setFormat(format.day)}>Day</button>
              <button onClick={() => setFormat(format.month)}>Month</button>
              <button onClick={() => setFormat(format.year)}>Year</button>
            </div>
            {currentFormat ?
              <DatePicker
                selected={startDate}
                onChange={this.handleChange}
                dateFormat={currentFormat}
              /> :
              <h3>Выберите формет даты</h3>}
              <button onClick={() => setFormat(format.clear)}>clear</button>
          </div>
  }
}

const mapStateToProps = state => ({
  currentFormat: state.date.format,
});

const mapDispatchToProps = dispatch => ({ setFormat: (format) => dispatch(format) })

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);