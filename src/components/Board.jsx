import { useState } from "react";
import Square from "./Sqaure";
import "./css/Board.scss";
const Board = ( {squares , handlesquareclick} ) => {
    
    const rendersqaure = position => {
        return (
            <Square
                value={squares[position]}
                onclick={() => handlesquareclick(position)} />
        )
    }

    return (
        <>
            <div className="board">
                <div className="board-row">
                    {rendersqaure(0)}
                    {rendersqaure(1)}
                    {rendersqaure(2)}
                </div>
                <div className="board-row">
                    {rendersqaure(3)}
                    {rendersqaure(4)}
                    {rendersqaure(5)}
                </div>
                <div className="board-row">
                    {rendersqaure(6)}
                    {rendersqaure(7)}
                    {rendersqaure(8)}
                </div>
            </div>

        </>
    )

}
export default Board;