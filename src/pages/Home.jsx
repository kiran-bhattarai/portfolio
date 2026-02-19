import Layout from "./Layout"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

function Home() {

  return (
    <Layout>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
    </Layout>
  )
}

export default Home