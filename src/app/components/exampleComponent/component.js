import React, { Component } from 'react'

export default class ExampleComponent extends Component {
    render() {
        return (
            <div>
                count: {this.props.count}
            </div>
        )
    }
}