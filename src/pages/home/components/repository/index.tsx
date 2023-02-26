import { Repository } from "../../../../models/repository";

import { 
  HomeRepositoryContainer, 
  HomeRespositoryName,
  HomeRepositoryPath } from "./style"

export default function HomeRepository({name, path}: Repository) {
  return (
    <HomeRepositoryContainer>
      <HomeRespositoryName>{name}</HomeRespositoryName>
      <HomeRepositoryPath>{path}</HomeRepositoryPath>
    </HomeRepositoryContainer>
  )
}
