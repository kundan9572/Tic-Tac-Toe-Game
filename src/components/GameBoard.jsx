export default function GameBoard({onSelectSquare, board}){
    return(
        <ol id="game-board">
             {console.log("boards: "+board.id)}
            {board.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) => (
                            <li key={colIndex}>
                                {console.log(playerSymbol)}
                                <button onClick={() => onSelectSquare(rowIndex,colIndex)} 
                                disabled={playerSymbol !== null}>{playerSymbol || ''}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}