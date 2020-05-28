import React from 'react';
import store from './Redux/Store';

import { connect } from 'react-redux';

class BusinessPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: "unavailable",
            showCallPickupButton: false,
            fetchUsers: false,
            currentCustomer: {}
        };
        this.input = React.createRef();
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }


    pickCall = () => {
        this.setState({ fetchUsers: true });
    }

    getCustomer = () => {
        let customers = this.props.user;
        let customerCount = customers.length;

        let customerNumber = Math.floor(Math.random() * customerCount);
        let currentCustomer = customers[customerNumber];

        return (
            <section>
                <h3>Name : {currentCustomer.name}</h3>
                <h3>Address : {currentCustomer.address}</h3>
                <h3>Customer Type : {currentCustomer.typeOfCustomer}</h3>
                <h3>Order History : {currentCustomer.orderHistory.map((item, index) => <li key={index}>{item}</li>)}</h3>
                <br />

                <section>
                    <label htmlFor="notes_section">Notes Section</label>
                    <input style={{ height: '200px', fontSize: '14pt' }} id="notes_section" type="text" ref={this.input} />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.saveNotes({ notes: this.input.current.value, mobile: currentCustomer.mobile });
                            // this.props.saveNotes();
                        }}
                    >
                        Save Notes
                            </button>
                </section>


            </section >
        )
    }

    render() {
        return (
            <div>
                <h1>Welcome to Business Page</h1>
                <section>
                    <select value={this.state.value} onChange={this.handleChange} >
                        <option value="available">Available</option>
                        <option value="unavailable">UnAvailable</option>
                    </select>
                </section>
                {
                    this.state.value === "available" &&
                    <section>
                        <br />
                        <button onClick={this.pickCall}>PickUpCall</button>
                    </section>
                }
                {
                    this.state.fetchUsers && this.getCustomer()

                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    user: state
})

const mapDispatchToProps = dispatch => {
    return {
        saveNotes: (payload = {}) => {
            console.log('payload' + JSON.stringify(payload));
            dispatch({ type: 'save_notes', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage);