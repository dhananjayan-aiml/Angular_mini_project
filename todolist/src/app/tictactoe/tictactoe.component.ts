import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer: string = 'X';
  winner: string = '';

  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      let winner = this.checkWin();
      if (winner) {
        this.winner = winner;
        setTimeout(() => this.resetGame(), 2000); // Reset the game after 2 seconds
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWin() {
    const lines = [
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    for (let line of lines) {
      if (line.every(cell => cell === 'X')) {
        return 'X';
      } else if (line.every(cell => cell === 'O')) {
        return 'O';
      }
    }

    return null;
  }

  resetGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.winner = '';
    this.currentPlayer = 'X';
  }
}