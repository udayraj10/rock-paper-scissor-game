import {
  HeaderSection,
  Headings,
  Label,
  ScoreSection,
  ScoreHead,
  Score,
} from './styledComponent'

const Header = props => {
  const {score} = props
  return (
    <HeaderSection>
      <Headings>
        <Label>ROCK PAPER SCISSORS</Label>
      </Headings>
      <ScoreSection>
        <ScoreHead>Score</ScoreHead>
        <Score>{score}</Score>
      </ScoreSection>
    </HeaderSection>
  )
}

export default Header
