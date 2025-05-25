import { Component } from 'react';

class GameLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-center font-sans m-5">
                {this.props.children}
            </div>
        );
    }
}

export default GameLayout;
