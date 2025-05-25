import { Component } from 'react';
import { connect } from 'react-redux';
import { setDraw, setField, setWinner } from '../../actions/gameActions';
import { WIN_PATTERNS } from '../../constants';
import FieldLayout from './FieldLayout';

class Field extends Component {
    constructor(props) {
        super(props);
        this.handleCellClick = this.handleCellClick.bind(this);
    }

    handleCellClick(index) {
        const {
            field,
            isGameEnded,
            currentPlayer,
            setField,
            setWinner,
            setDraw,
        } = this.props;
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;

        const winningCombination = WIN_PATTERNS.find((pattern) =>
            pattern.every((i) => newField[i] === currentPlayer)
        );

        if (winningCombination) {
            setField(newField, currentPlayer);
            setWinner(winningCombination);
            return;
        }

        if (!newField.includes('')) {
            setField(newField, currentPlayer);
            setDraw();
            return;
        }

        setField(newField, currentPlayer === 'X' ? '0' : 'X');
    }

    render() {
        const { field, winningCells } = this.props;
        return (
            <FieldLayout>
                {field.map((cell, index) => (
                    <button
                        key={index}
                        className="w-[100px] h-[100px] text-2xl cursor-pointer rounded-lg"
                        style={{
                            border: winningCells?.includes(index)
                                ? '2px solid #22c55e'
                                : '1px solid #ccc',
                        }}
                        onClick={() => this.handleCellClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </FieldLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    field: state.field,
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    winningCells: state.winningCells,
});

const mapDispatchToProps = {
    setField,
    setWinner,
    setDraw,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
