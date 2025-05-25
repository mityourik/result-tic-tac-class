import { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../actions/gameActions';
import Field from '../Field/Field';
import Information from '../Information/Information';
import GameLayout from './GameLayout';

class Game extends Component {
    constructor(props) {
        super(props);
        this.handleResetGame = this.handleResetGame.bind(this);
    }

    handleResetGame() {
        this.props.restartGame();
    }

    render() {
        return (
            <GameLayout>
                <Information />
                <Field />
                <button
                    className="mt-5 px-5 py-2 text-base cursor-pointer border border-gray-300 rounded-lg"
                    onClick={this.handleResetGame}
                >
                    Начать заново
                </button>
            </GameLayout>
        );
    }
}

const mapDispatchToProps = {
    restartGame,
};

export default connect(null, mapDispatchToProps)(Game);
