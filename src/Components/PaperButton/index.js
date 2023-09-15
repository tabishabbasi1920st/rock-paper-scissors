import {GameElementImage, CustomButton} from '../Game/styledComponents'

const PaperButton = props => {
  const {paperImage, onClickPaperButton} = props
  return (
    <CustomButton
      type="button"
      data-testid="paperButton"
      onClick={() => {
        onClickPaperButton()
      }}
    >
      <GameElementImage src={paperImage} alt="PAPER" />
    </CustomButton>
  )
}

export default PaperButton
