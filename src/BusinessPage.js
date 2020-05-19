import React from 'react';

class BusinessPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "unavailable",
            showCallPickupButton: false
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
        console.log("You have selected " + e.target.value);
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
                        <button>PickUpCall</button>
                    </section>
                }
            </div>
        )
    }

}

export default BusinessPage;