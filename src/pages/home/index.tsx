import { useState } from "react";

import { 
  HomeContainer, 
  HomeForm, 
  HomeLogo, 
  HomeInput, 
  HomeButton,
  HomeContent,
  HomeMessage } from "./style"

import HomeRepository from "./components/repository"
import { Repository } from "../../models/repository";

import { findRepository } from "../../services/gitapi";

export default function HomePage() {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<boolean>(false);
  const [repositories, setRespositories] = useState<Repository[]>([]);

  async function search() {
    if (username.length > 0 ) {
      const list = await findRepository(username);
      setMessage(true);
      setRespositories(list);
    }
  }

  return (
    <HomeContainer>
      <HomeForm>
        <HomeLogo src="assets/github-log.png"/>
        <HomeInput placeholder="username" onChange={(event) => setUsername(event.target.value)}/>
        <HomeButton onClick={() => search()}>Search</HomeButton>
      </HomeForm>

      <HomeContent>
      <HomeMessage>
        {message && `${repositories.length} respositories found`}
      </HomeMessage>

        {repositories.map((repository, index) => (
          <HomeRepository
            key={index}
            name={repository.name}
            path={repository.path}
          ></HomeRepository>
        ))}
      </HomeContent>
    </HomeContainer>
  )
}