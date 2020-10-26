import React, {Component} from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i) {
      return <Square  value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
          <div className="board-row">
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare()}
          </div>
        </div>
      );
    }
}
export default Board;