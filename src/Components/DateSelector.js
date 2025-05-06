import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={{padding: '20px'}}>
            <h2>Select a Date:</h2>
            <DatePicker 
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText='Click to select a date'
              dateFormat='yyyy/MM/dd'
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            {selectedDate && (
                <p style={{ marginTop: '10px' }}>
                    You selected: {selectedDate.toDateString()}
                </p>
            )}
        </div>
    );
}

export default DateSelector;