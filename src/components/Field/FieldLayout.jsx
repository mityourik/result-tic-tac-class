import { Component } from 'react';

class FieldLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid grid-cols-3 gap-[5px] justify-center mx-auto">
                {this.props.children}
            </div>
        );
    }
}

export default FieldLayout;
