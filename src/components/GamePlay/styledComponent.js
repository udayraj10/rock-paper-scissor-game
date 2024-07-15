import styled from 'styled-components'

export const GamePlayContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const PlayingViewSection = styled.ul`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
`

export const PlayingViewItem = styled.ul`
  list-style-type: none;
`

export const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0px;
`

export const PlayImage = styled.img`
  width: 180px;

  @media screen and (max-width: 767px) {
    width: 150px;
  }
`

export const PopupContainer = styled.div`
  align-self: flex-end;
`

export const ModalSection = styled.div`
  background-color: #fff;
  width: 600px;
  @media screen and (max-width: 767px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  display: flex;
  flex-direction: column;
  padding: 5px 25px 25px 25px;
`

export const GameButton = styled.button`
  background-color: #fff;
  font-family: 'bree serif';
  font-size: 15px;
  color: #223a5f;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
`

export const RuleImage = styled.img`
  width: 100%;
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0px;
  align-self: flex-end;
  margin-bottom: 5px;
`

export const GameResultSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultImageSection = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const Result = styled.p`
  color: #fff;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
`
