import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const IndicatorContainer = styled.div`
  height: 100px;
  width: 90%;
  border-radius: 8px;
  border: 2px solid white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`
export const GameItemContainer = styled.div`
  height: 100%;
  width: 80px;
  justify-content: space-between;
`
export const ScoreContainer = styled.div`
  height: 100%;
  min-width: 110px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainHeading = styled.h1`
  color: #fff;
  font-size: 20px;
`
export const ScorePara = styled.p`
  color: #223a5f;
  font-weight: bold;
  text-align: center;
`
export const ScoreValuePara = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`
// ---------------------------------

export const GameContainer = styled.div`
  height: 250px;
  width: 90%;
`
export const InnerGameContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`
export const GameElementImage = styled.img`
  height: 120px;
  width: 120px;
`
export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 5%;
  margin-left: 5%;
  cursor: pointer;
`

export const RulesButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
export const RulesButton = styled.button`
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: #223a5f;
  font-weight: bold;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 769px) {
    height: 600px;
    min-width: 600px;
  }
`
export const CrossButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`
export const CrossButtonStyle = {
  height: '25px',
  width: '25px',
}

export const CrossButton = styled.button`
  background-color: #fdf;
  border: none;
  height: 30px;
  width: 30px;
`
export const ModalImage = styled.img`
  height: 90%;
  width: 90%;
`

// -----------------------------------

export const GameResultContainer = styled.div`
  height: 250px;
  //   border: 2px solid red;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultInnerGameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  //   border: 2px solid red;
`
export const ResultContestantContainer = styled.div`
  //   border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContestantPara = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`
export const ResultPara = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 25px;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 170px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`
