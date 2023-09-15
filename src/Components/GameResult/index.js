import {
  GameElementImage,
  GameResultContainer,
  ResultInnerGameContainer,
  ResultContestantContainer,
  ContestantPara,
  ResultPara,
  PlayAgainButton,
} from '../Game/styledComponents'

const GameResult = props => {
  const {yourImage, opponentImage, gameResult, onClickPlayAgainButton} = props
  return (
    <GameResultContainer>
      <ResultInnerGameContainer>
        <ResultContestantContainer>
          <ContestantPara>YOU</ContestantPara>
          <GameElementImage src={yourImage} alt="your choice" />
        </ResultContestantContainer>
        <ResultContestantContainer>
          <ContestantPara>OPPONENT</ContestantPara>
          <GameElementImage src={opponentImage} alt="opponent choice" />
        </ResultContestantContainer>
      </ResultInnerGameContainer>
      <ResultPara>{gameResult}</ResultPara>
      <PlayAgainButton
        type="button"
        onClick={() => {
          onClickPlayAgainButton()
        }}
      >
        Play Again
      </PlayAgainButton>
    </GameResultContainer>
  )
}

export default GameResult
