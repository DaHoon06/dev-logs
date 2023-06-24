import {NextPage} from "next";
import { GitEventLists } from "@components/github/GitEventLists";
import { IssueLists } from "@components/github/IssueLists";
import { RepositoryLists } from "@components/github/RepositoryLists";

const Home: NextPage = () => {
  return (
    <div>
      <section>
        <GitEventLists />
        <IssueLists />
      </section>
      <section>
        <RepositoryLists />
      </section>
    </div>
  )
}

export default Home;