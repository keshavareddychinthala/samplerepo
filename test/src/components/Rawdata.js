import React, { Component } from 'react'

class Rawdata extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (<div>
            <h3 style={{float:'center'}}>Raw Data</h3>
            <div className="card" style={{ backgroundColor: '#0E748B' }}>
                <div className="card-body">
                    {JSON.stringify(this.props.location.state)}

                </div>
            </div>
        </div>

        )
    }
}

export default Rawdata;