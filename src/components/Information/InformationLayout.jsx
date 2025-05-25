import { Component } from 'react';

class InformationLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="mb-7">{this.props.children}</div>;
    }
}

export default InformationLayout;
