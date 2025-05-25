import { Component } from 'react';
import { connect } from 'react-redux';
import InformationLayout from './InformationLayout';

class Information extends Component {
    constructor(props) {
        super(props);
        this.getStatus = this.getStatus.bind(this);
    }

    getStatus() {
        const { currentPlayer, isGameEnded, isDraw } = this.props;
        if (isDraw) return 'Ничья!';
        if (isGameEnded) return `Победил ${currentPlayer}!`;
        return `Ходит: ${currentPlayer}`;
    }

    render() {
        return (
            <InformationLayout>
                <h1 className="text-2xl mb-2 uppercase font-bold">
                    крестики-нолики
                </h1>
                <div className="text-xl font-bold">{this.getStatus()}</div>
            </InformationLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
