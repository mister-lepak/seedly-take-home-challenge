import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import QnA from "./components/QnA";
import Footer from "./components/Footer";
import indexCSS from "./css/index.css";
import useFetch from "./components/util";

function App({ match }) {
  let {
    params: { ...chosenTopic },
  } = match;
  if (!chosenTopic.topicName) {
    chosenTopic = { topicName: "" };
  }

  const [questions, questionsLoading, questionsHasError] = useFetch(
    "models/questions.json"
  );
  const [answers, answersLoading, answersHasError] = useFetch(
    "models/answers.json"
  );
  const [users, usersLoading, usersHasError] = useFetch("models/users.json");
  const [topics, topicsLoading, topicsHasError] = useFetch(
    "models/topics.json"
  );

  return (
    <>
      {questionsLoading || answersLoading || usersLoading || topicsLoading ? (
        <div>Loading...</div>
      ) : questionsHasError ||
        answersHasError ||
        usersHasError ||
        topicsHasError ? (
        <div>Error Occured.</div>
      ) : (
        <main className="ui grid">
          <nav className="ui row">
            <Navbar />
          </nav>
          <header className="ui row">
            <Banner chosenTopic={chosenTopic.topicName} topics={topics} />
          </header>
          <aside id="sidebar" className="ui three wide column">
            <Sidebar topics={topics} />
          </aside>
          <section id="qna" className="ui centered eleven wide column">
            <QnA
              chosenTopic={chosenTopic.topicName}
              topics={topics}
              questions={questions}
              answers={answers}
              users={users}
            />
          </section>
          <aside id="advertisement" className="ui two wide column"></aside>
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
