import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import {
  GamePlayContainer,
  PlayingViewSection,
  PlayingViewItem,
  PlayButton,
  PlayImage,
  PopupContainer,
  RuleImage,
  GameButton,
  ModalSection,
  CloseButton,
  GameResultSection,
  Result,
  ResultImageSection,
} from './styledComponent'

class GamePlay extends Component {
  state = {
    yourChoice: '',
    opponentChoice: '',
    score: '0',
    gameResult: false,
    result: '',
  }

  renderRulePopup = () => (
    <PopupContainer>
      <Popup modal trigger={<GameButton type="button">Rules</GameButton>}>
        {close => (
          <ModalSection>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseButton>
            <RuleImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ModalSection>
        )}
      </Popup>
    </PopupContainer>
  )

  onClickRock = id => {
    const {choicesList} = this.props

    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[randomNum]

    const user = choicesList.find(each => each.id === id)

    let result = ''
    if (user.id === opponent.id) {
      result = 'IT IS DRAW'
    } else if (user.id && opponent.id === 'SCISSORS') {
      result = 'YOU WON'
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      yourChoice: user.imageUrl,
      opponentChoice: opponent.imageUrl,
      result,
      gameResult: true,
    })
  }

  onClickScissor = id => {
    const {choicesList} = this.props

    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[randomNum]

    const user = choicesList.find(each => each.id === id)

    let result = ''
    if (user.id === opponent.id) {
      result = 'IT IS DRAW'
    } else if (user.id && opponent.id === 'PAPER') {
      result = 'YOU WON'
      this.setState(prevState => ({score: parseInt(prevState.score + 1)}))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      yourChoice: user.imageUrl,
      opponentChoice: opponent.imageUrl,
      result,
      gameResult: true,
    })
  }

  onClickPaper = id => {
    const {choicesList} = this.props

    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[randomNum]

    const user = choicesList.find(each => each.id === id)

    let result = ''
    if (user.id === opponent.id) {
      result = 'IT IS DRAW'
    } else if (user.id && opponent.id === 'ROCK') {
      result = 'YOU WON'
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({score: prevState.score - 1}))
    }

    this.setState({
      yourChoice: user.imageUrl,
      opponentChoice: opponent.imageUrl,
      result,
      gameResult: true,
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <PlayingViewSection>
        <PlayingViewItem key={choicesList[0].id}>
          <PlayButton
            type="button"
            data-testid="rockButton"
            onClick={() => this.onClickRock(choicesList[0].id)}
          >
            <PlayImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </PlayButton>
        </PlayingViewItem>
        <PlayingViewItem key={choicesList[1].id}>
          <PlayButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => this.onClickScissor(choicesList[1].id)}
          >
            <PlayImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </PlayButton>
        </PlayingViewItem>
        <PlayingViewItem key={choicesList[2].id}>
          <PlayButton
            type="button"
            data-testid="paperButton"
            onClick={() => this.onClickPaper(choicesList[2].id)}
          >
            <PlayImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </PlayButton>
        </PlayingViewItem>
      </PlayingViewSection>
    )
  }

  onPlayAgain = () => {
    this.setState({gameResult: false})
  }

  renderGameResultView = () => {
    const {yourChoice, opponentChoice, result} = this.state

    return (
      <GameResultSection>
        <ResultImageSection>
          <PlayImage src={yourChoice} alt="your choice" />
          <PlayImage src={opponentChoice} alt="opponent choice" />
        </ResultImageSection>
        <Result>{result}</Result>
        <GameButton type="button" onClick={this.onPlayAgain}>
          Play Again
        </GameButton>
      </GameResultSection>
    )
  }

  render() {
    const {score, gameResult} = this.state
    return (
      <GamePlayContainer>
        <Header score={score} />
        {gameResult ? this.renderGameResultView() : this.renderPlayingView()}
        {this.renderRulePopup()}
      </GamePlayContainer>
    )
  }
}

export default GamePlay
