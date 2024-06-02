import "./App.scss";
import QuestionsInput from "./components/QuestionsInput";
import CategoryInput from "./components/CategoryInput";
import DifficultyInput from "./components/DifficultyInput";
import TypeInput from "./components/TypeInput";
import TimeInput from "./components/TimeInput";
import StartQuizButton from "./components/StartQuizButton";
import SeeMyStatsButton from "./components/SeeMyStatsButton";

function App() {
  return (
    <div className="App">
      <header>Quiz App</header>
      <div className="inputs">
        <QuestionsInput />
        <CategoryInput />
        <DifficultyInput />
        <TypeInput />
        <TimeInput />
      </div>
      <div className="buttons">
        <StartQuizButton />
        <SeeMyStatsButton />
      </div>
    </div>
  );
}

export default App;
