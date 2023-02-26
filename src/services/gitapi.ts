import axios from "axios";
import { Repository } from "../models/repository";

type Response = {
  name: string;
  full_name: string;
}

export async function findRepository(username: string): Promise<Repository[]> {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => response.status == 200 ? response.data : [])
    .then(repositories => repositories.map(({name, full_name}: Response) => { return {
        name: name,
        path: full_name
      }
    }));
}