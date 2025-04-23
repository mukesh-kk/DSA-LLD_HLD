class TicTacToe:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"

    def print_board(self):
        for row in self.board:
            print("|".join(row))
            print("-" * 5)

    def switch_player(self):
        self.current_player = "O" if self.current_player == "X" else "X"

    def make_move(self, row, col):
        if self.board[row][col] != " ":
            print("Cell already taken. Try again.")
            return False
        self.board[row][col] = self.current_player
        return True

    def check_winner(self):
        b = self.board
        p = self.current_player

        # Rows, Columns, Diagonals
        return (
            any(all(b[r][c] == p for c in range(3)) for r in range(3)) or
            any(all(b[r][c] == p for r in range(3)) for c in range(3)) or
            all(b[i][i] == p for i in range(3)) or
            all(b[i][2 - i] == p for i in range(3))
        )

    def is_draw(self):
        return all(cell != " " for row in self.board for cell in row)

    def play(self):
        print("Welcome to Tic Tac Toe!")
        self.print_board()

        while True:
            try:
                row, col = map(int, input(f"Player {self.current_player}, enter row and col (0-2): ").split())
            except ValueError:
                print("Invalid input. Please enter two integers separated by a space.")
                continue

            if row not in range(3) or col not in range(3):
                print("Invalid coordinates. Must be between 0 and 2.")
                continue

            if self.make_move(row, col):
                self.print_board()

                if self.check_winner():
                    print(f"Player {self.current_player} wins!")
                    break
                if self.is_draw():
                    print("It's a draw!")
                    break

                self.switch_player()

TicTacToe().play()
