import React from 'react'


const Result = ({score,playAgain} ) => (
    <div className='score-board'>
        <div className='score'>
            YOU SCORED {score} / 5 correct answer!
             </div>
            <button className='playBtn' onClick= { playAgain }>
                PLAY AGAIN!
                </button>
                </div>
) 
export default Result

