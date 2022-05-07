import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                </div>
                <div className="board-row">
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(25).fill(null),
            }],
            xIsNext: true,
            isWinner: false,
            stepNumber: 0,
            lastIndex: 0,
        };
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            isWinner: false,
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        console.log("click at index " + i);
        let index = dropDown(squares, i);
        console.log("new index is " + index);
        console.log(calculateWinner(squares, index));
        if(this.state.isWinner || squares[i]) {   // squares[i] falls nicht null -> return
            console.log("There is already a winner!");
            return;
        }
        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            lastIndex: index,
            isWinner: calculateWinner(squares, index),
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares, this.state.lastIndex);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ": " + (move % 2 ? 'X ticked: ' : 'O ticked: '):
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function dropDown(squares, index) {
    while (index <= squares.length) {
        if(squares[index + 5] === null) {
            index = index + 5;
        } else {
            return index;
        }
    }
    return index;
}

function calculateWinner(squares, index) {
    console.log("Entered calculateWinner() with index " + index);
    if(squares[index] === null) {
        return null
    } else if ( // check current in the middle
        (squares[index] === squares[index - 1] && squares[index] === squares[index + 1]) ||
        (squares[index] === squares[index - 5] && squares[index] === squares[index + 5]) ||
        (squares[index] === squares[index - (5 - 1)] && squares[index] === squares[index + (5 - 1)]) ||
        (squares[index] === squares[index - (5 + 1)] && squares[index] === squares[index + (5 + 1)])) {
        return squares[index];
    }
    else if ( // check current at the edge
        (squares[index] === squares[index + 1] && squares[index] === squares[index + 2]) ||
        (squares[index] === squares[index - 1] && squares[index] === squares[index - 2]) ||
        (squares[index] === squares[index + 5] && squares[index] === squares[index + 2 * 5]) ||
        (squares[index] === squares[index - 5] && squares[index] === squares[index - 2 * 5]) ||
        (squares[index] === squares[index + (5 - 1)] && squares[index] === squares[index + 2 * (5 - 1)]) ||
        (squares[index] === squares[index - (5 - 1)] && squares[index] === squares[index - 2 * (5 - 1)]) ||
        (squares[index] === squares[index + (5 + 1)] && squares[index] === squares[index + 2 * (5 + 1)]) ||
        (squares[index] === squares[index - (5 + 1)] && squares[index] === squares[index - 2 * (5 + 1)])
        ) {
        return squares[index];
    } else {
        return null
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

