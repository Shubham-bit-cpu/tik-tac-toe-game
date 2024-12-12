const StatusMessage = ({ winner, isNextX, squares }) => {
    const nomoveleft = squares.every(squareValue => squareValue !== null);
    const nextplayer = isNextX ? "X" : "O";
    const statusMessage = winner ? `Winner is ${winner}` : `Next player: ${nextplayer}`;
  
    return (
      <div>
        <h2>{statusMessage}</h2>
        {winner && nomoveleft && <h3>Hello, it's a draw!</h3>}
        {!winner && nomoveleft && <h3>No moves left. It's a draw!</h3>}
        {winner && !nomoveleft && <h3>Hello, winner is {winner}!</h3>}
      </div>
    );
  };
  
  export default StatusMessage;
  