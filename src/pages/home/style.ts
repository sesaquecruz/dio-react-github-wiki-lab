import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeForm = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeLogo = styled.img`
  width: 125px;
  margin-top: 50px;
`

export const HomeInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  font-size: 24px;
  margin-top: 50px;
  background-color: white;
  color: black;
`
export const HomeButton = styled.button`
  width: 250px;
  height: 50px;
  margin-top: 25px;
  font-size: 22px;
  background-color: #e6e6e6;
  color: black;

  :hover {
    font-weight: bold;
    cursor: pointer;
  }

  :active {
    background-color: #ffffff;
    animation-duration: 20s;
  }
`

export const HomeContent = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 50px;
`

export const HomeMessage = styled.p`
`
