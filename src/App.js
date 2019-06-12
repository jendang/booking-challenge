import React from 'react';
import './style.scss';
import BookingForm from './components/BookingForm';


export class App extends React.Component {

    render() {
        return (
            <div>
                <h1 className="header">Taxi Electric Booking Requirements </h1>
                <div className="content">
                    <BookingForm />
                </div>
            </div>
        )
    }
}