import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'


class Daypicker extends Component {
    static propTypes = {

    };

    state = {
        from: null,
        to: null
    }

    render() {
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    selectedDays={this.handleSelect}
                    onDayClick={this.handleDayClick}
                />
                {this.getRangeTitle()}
            </div>
        )
    }

    handleSelect = day => DateUtils.isDayInRange(day, this.props.range)
    getRangeTitle() {
        const { from, to } = this.props.range
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props.range);
        const { filterRange } = this.props
        filterRange(range)
    }
}

export default Daypicker
