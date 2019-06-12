import React from 'react'
import Message from './Message'
import { Link, Redirect } from 'react-router-dom'

class BookingForm extends React.Component {
    state = {
        pickupAdd: "",
        dropoffAdd: "",
        price: "",
        name: "",
        phone: "",
        email: "",
        bookingStatus: false, 
    
    }

    onPassengerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitBooking = (e) => {
        e.preventDefault()
        fetch("http://localhost:9090/book", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                pickupAdd: this.state.pickupAdd,
                dropoffAdd: this.state.dropoffAdd,
                price: this.state.price,
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
            })
           
        })
        .then(response => response.json())
        .then(data => this.setState({ bookingStatus: true }))
        .catch(err => console.error(err))
        e.currentTarget.reset()
    }

    handlePriceChange = (e) => {
        e.preventDefault()
        this.setState({ 
            pickupAdd: e.target.value ,
            dropoffAdd: e.target.value
        })
        fetch("http://localhost:9090/price", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                pickupAdd: this.state.pickupAdd,
                dropoffAdd: this.state.dropoffAdd
            })
        })
        .then(response => response.json())
        .then(data => this.setState({ price: data.price }))
        .catch(err => console.error(err))

    }

    handleButtonSubmit = () => {
        if(this.state.bookingStatus){
            return <Message />
            
        }
    }


    render(){
        const { price } = this.state
        console.log(this.state)
        return (
            <div>
                
                <div>
                    <form type="submit" onSubmit={this.handleSubmitBooking} className="ui form">
                        <label>Booking information</label>
                            <div className="field">
                                <label>Pickup Address * </label>
                                <input 
                                    onChange={this.handlePriceChange} 
                                    name="pickupAdd"
                                    type="text" 
                                    placeholder="Address" 
                                    required
                                />
                            </div>
                            <div className="field">
                                <label>Dropoff Addresses * </label>
                                <input 
                                    onChange={this.handlePriceChange} 
                                    name="dropoffAdd"
                                    type="text" 
                                    placeholder="Adress" 
                                    required
                                />
                            </div>
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
                            <label>Please choose the taxi model!</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <label>Nissan Leaf</label>
                                    <input type="radio"/>
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
                        <label>Passenger Details</label>
                        <div className="field">
                            <input 
                                onChange={this.onPassengerChange}
                                name="name"
                                type="text" 
                                placeholder="Full name" 
                                required
                            />
                        </div>
                        <div className="field">
                            <input 
                                onChange={this.onPassengerChange}
                                name="phone"
                                type="number" 
                                placeholder="Phone number 06-xxx-xxxx" 
                                required
                            />
                        </div>
                        <div className="field">
                            <input 
                                onChange={this.onPassengerChange}
                                name="email"
                                type="email" 
                                placeholder="Email" 
                            />
                        </div>
                        <div className="field">
                            <label>Total price: { price }</label>
                        </div>
                        {this.state.bookingStatus 
                        ? 
                        <div>
                            <button className="ui green button">Order</button>
                            <h4>Thank you for booking with Taxi Electric!</h4>
                        </div>
                        : <button className="ui green button">Order</button>
                        }
                        
                    </form>
                </div>

            </div>
        )
    }
}

export default BookingForm