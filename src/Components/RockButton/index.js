import {GameElementImage, CustomButton} from '../Game/styledComponents'

const RockButton = props => {
  const {rockImage, onClickRockButton} = props
  return (
    <CustomButton
      type="button"
      data-testid="rockButton"
      onClick={() => {
        onClickRockButton()
      }}
    >
      <GameElementImage src={rockImage} alt="ROCK" />
    </CustomButton>
  )
}

export default RockButton
