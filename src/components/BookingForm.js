import React from 'react'


class BookingForm extends React.Component {
    render(){
        return (
            <div>
                
                <div>
                    <form type="submit" onSubmit={this.handleSubmitBooking} className="ui form">
                        <h4 classNam="ui dividing header">Booking information</h4>
                        {/* <div className="two fields"> */}
                            <div className="field">
                                <label>Pickup Address * </label>
                                <input type="text" placeholder="Address" required/>
                            </div>
                            <div className="field">
                                <label>Dropoff Addresses * </label>
                                <input type="text" placeholder="Adress" required/>
                            </div>
                        {/* </div> */}
                        <div className="field">
                            <label>Stop Addresses</label>
                            <input type="text" placeholder="Address"/>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" />
                                <label>Process my booking ASAP!</label>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <input type="date" placeholder="DD-MM-YYYY" required/>
                              </div>
                            <div className="field">
                                <input type="time" placeholder="HH:MM" required/>
                            </div>
                        </div>
                        <div className="inline fields">
                            <lavel>Please choose the taxi model!</lavel>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <label>Nissan Leaf</label>
                                    <input type="radio" checked="checked"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <label>Tesla Model S</label>
                                    <input type="radio"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <label>Tesla Model X</label>
                                    <input type="radio"/>
                                </div>
                            </div>
                        </div>
                        <h4 classNam="ui dividing header">Passenger Details</h4>
                        <div className="field">
                            <input type="text" placeholder="Full name" required/>
                        </div>
                        <div className="field">
                            <input type="number" placeholder="Phone number 06-xxx-xxxx" required/>
                        </div>
                        <div className="field">
                            <input type="email" placeholder="Email" />
                        </div>
                        <h4 classNam="ui dividing header">Total Price: -</h4>
                        <button className="ui green button">Order</button>
                        
                    </form>
                </div>

            </div>
        )
    }
}

export default BookingForm