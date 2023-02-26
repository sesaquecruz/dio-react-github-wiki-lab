import styled from "styled-components";

export const HomeRepositoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
  padding: 5px;

  :hover {
    border: solid 2px #368dc0;
    border-radius: 5px;
  }
`

export const HomeRespositoryName = styled.h2`
  color: #94eb7a;
`

export const HomeRepositoryPath = styled.p`
  margin-top: 5px;
  color: #dfdfdf;
`
