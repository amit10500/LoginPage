import React from 'react';

class TelExtensionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { telExt: '' }
    }

    changeTelExtValue = (e) => {
        this.setState({ telExt: e.target.value });
    }

    handleSubmit = (e) => {
        this.props.history.push('/business');
    }


    render() {
        return (
            <div>
                <header>
                    <h2>Computer Telephonic Integration</h2>
                </header>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="telExtension">Enter Telephonic Extension</label>
                        <input id="telExtension" type="text" value={this.state.telExt} onChange={this.changeTelExtValue} />
                        <button>Next</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default TelExtensionPage