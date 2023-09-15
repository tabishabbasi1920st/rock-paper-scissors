import {GameElementImage, CustomButton} from '../Game/styledComponents'

const RockButton = props => {
  const {scissorsImage, onClickScissorsButton} = props
  return (
    <CustomButton
      type="button"
      data-testid="scissorsButton"
      onClick={() => {
        onClickScissorsButton()
      }}
    >
      <GameElementImage src={scissorsImage} alt="SCISSORS" />
    </CustomButton>
  )
}

export default RockButton
