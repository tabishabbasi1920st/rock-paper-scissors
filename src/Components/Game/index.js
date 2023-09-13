import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  IndicatorContainer,
  GameItemContainer,
  ScoreContainer,
  MainHeading,
  ScorePara,
  ScoreValuePara,
  GameContainer,
  InnerGameContainer,
  GameElementImage,
  CustomButton,
  RulesButtonContainer,
  RulesButton,
  ModalContainer,
  CrossButtonContainer,
  CrossButtonStyle,
  CrossButton,
  ModalImage,
  GameResultContainer,
  ResultInnerGameContainer,
  ResultContestantContainer,
  ContestantPara,
  ResultPara,
  PlayAgainButton,
} from './styledComponents'

const choicesConstants = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

const resultsConstants = {
  lose: 'YOU LOSE',
  win: 'YOU WON',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    gameScore: 0,
    showResult: false,
    yourChoice: '',
    opponentChoice: '',
    yourImage: '',
    opponentImage: '',
    gameResult: '',
  }

  getGameResult = () => {
    const {yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const yourChoiceImgObj = choicesList.filter(
      eachObj => eachObj.id === yourChoice,
    )
    const opponentChoiceImgObj = choicesList.filter(
      eachObj => eachObj.id === opponentChoice,
    )

    const yourChoiceImg = yourChoiceImgObj[0].imageUrl
    const opponentChoiceImg = opponentChoiceImgObj[0].imageUrl

    let gameResultText = null

    if (
      yourChoice === choicesConstants.rock &&
      opponentChoice === choicesConstants.rock
    ) {
      gameResultText = resultsConstants.draw
    } else if (
      yourChoice === choicesConstants.rock &&
      opponentChoice === choicesConstants.paper
    ) {
      gameResultText = resultsConstants.lose
    } else if (
      yourChoice === choicesConstants.rock &&
      opponentChoice === choicesConstants.scissors
    ) {
      gameResultText = resultsConstants.win
    } else if (
      yourChoice === choicesConstants.paper &&
      opponentChoice === choicesConstants.paper
    ) {
      gameResultText = resultsConstants.draw
    } else if (
      yourChoice === choicesConstants.paper &&
      opponentChoice === choicesConstants.rock
    ) {
      gameResultText = resultsConstants.win
    } else if (
      yourChoice === choicesConstants.paper &&
      opponentChoice === choicesConstants.scissors
    ) {
      gameResultText = resultsConstants.lose
    } else if (
      yourChoice === choicesConstants.scissors &&
      opponentChoice === choicesConstants.scissors
    ) {
      gameResultText = resultsConstants.draw
    } else if (
      yourChoice === choicesConstants.scissors &&
      opponentChoice === choicesConstants.paper
    ) {
      gameResultText = resultsConstants.win
    } else if (
      yourChoice === choicesConstants.scissors &&
      opponentChoice === choicesConstants.rock
    ) {
      gameResultText = resultsConstants.lose
    }

    if (gameResultText === resultsConstants.win) {
      this.setState(prevState => ({gameScore: prevState.gameScore + 1}))
    } else if (gameResultText === resultsConstants.lose) {
      this.setState(prevState => ({gameScore: prevState.gameScore - 1}))
    }

    this.setState({
      yourImage: yourChoiceImg,
      opponentImage: opponentChoiceImg,
      gameResult: gameResultText,
      showResult: true,
    })
  }

  generateRandom = (min = 0, max = 100) => {
    const difference = max - min
    let rand = Math.random()
    rand = Math.floor(rand * difference)
    rand += min
    return rand
  }

  getOpponentChoice = () => {
    const {rock, paper, scissors} = choicesConstants
    const opponentChoicesItem = [rock, paper, scissors]
    const opponentChoiceItemIndex = this.generateRandom(
      0,
      opponentChoicesItem.length,
    )
    const opponentChoice = opponentChoicesItem[opponentChoiceItemIndex]

    this.setState({opponentChoice}, this.getGameResult)
  }

  onClickRockButton = () => {
    this.setState({yourChoice: choicesConstants.rock}, this.getOpponentChoice)
  }

  onClickScissorsButton = () => {
    this.setState(
      {yourChoice: choicesConstants.scissors},
      this.getOpponentChoice,
    )
  }

  onClickPaperButton = () => {
    this.setState({yourChoice: choicesConstants.paper}, this.getOpponentChoice)
  }

  render() {
    const {
      showResult,
      yourImage,
      opponentImage,
      gameResult,
      gameScore,
    } = this.state

    const {choicesList} = this.props
    const rockImage = choicesList[0].imageUrl
    const scissorsImage = choicesList[1].imageUrl
    const paperImage = choicesList[2].imageUrl

    return (
      <AppContainer>
        <IndicatorContainer>
          <GameItemContainer>
            <MainHeading>Rock Paper Scissors</MainHeading>
          </GameItemContainer>
          <ScoreContainer>
            <ScorePara>Score</ScorePara>
            <ScoreValuePara>{gameScore}</ScoreValuePara>
          </ScoreContainer>
        </IndicatorContainer>

        {showResult === false && (
          <GameContainer>
            <InnerGameContainer>
              <CustomButton
                type="button"
                data-testid="rockButton"
                onClick={this.onClickRockButton}
              >
                <GameElementImage src={rockImage} alt="ROCK" />
              </CustomButton>
              <CustomButton
                type="button"
                data-testid="scissorsButton"
                onClick={this.onClickScissorsButton}
              >
                <GameElementImage src={scissorsImage} alt="SCISSORS" />
              </CustomButton>
            </InnerGameContainer>
            <InnerGameContainer>
              <CustomButton
                type="button"
                data-testid="paperButton"
                onClick={this.onClickPaperButton}
              >
                <GameElementImage src={paperImage} alt="PAPER" />
              </CustomButton>
            </InnerGameContainer>
          </GameContainer>
        )}
        {showResult && (
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
                this.setState({
                  showResult: false,
                  yourChoice: '',
                  opponentChoice: '',
                  yourImage: '',
                  opponentImage: '',
                  gameResult: '',
                })
              }}
            >
              Play Again
            </PlayAgainButton>
          </GameResultContainer>
        )}

        <RulesButtonContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <ModalContainer>
                <CrossButtonContainer>
                  <CrossButton type="button" onClick={() => close()}>
                    <RiCloseLine style={CrossButtonStyle} />
                  </CrossButton>
                </CrossButtonContainer>
                <ModalImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModalContainer>
            )}
          </Popup>
        </RulesButtonContainer>
      </AppContainer>
    )
  }
}

export default Game
