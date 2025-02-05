import Book1 from "./components/ch03/Book1";
import { Book2 } from "./components/ch03/Book2";
import Form from "./components/ch03/Form";
import Profile from "./components/ch03/Profile";
import Test from "./components/ch03/Test";
import Title from "./components/ch03/Title";
import Title2 from "./components/ch03/Title2";
import Title3 from "./components/ch03/Title3";
import TodayDate from "./components/ch03/TodayDate";
import CallApi from "./components/ch04/CallApi";
import Counter from "./components/ch04/Counter";
import Counter2 from "./components/ch04/Counter2";
import PageCounter from "./components/ch04/PageCounter";
import ToggleLight from "./components/ch04/ToggleLight";
import ToggleLightPlus from "./components/ch04/ToggleLightPlus";

function App() {
  return (
    <div>
      <Title />
      <Title />
      <Title />
      <Form />
      <Test />
      <Title2 title="Javascript" author="Alex" />
      <Title3 title="React" author="John" />
      <Book1 titre="React avance">
        <Title />
        <Title2 title="Javascript" author="Alex" />
      </Book1>
      <Profile />
      <Book2 isNew={true}>
        <Title3 title="React" author="John" />
      </Book2>
      <TodayDate />
      <Counter />
      <PageCounter />
      <ToggleLight />
      <ToggleLightPlus />
      <Counter2 />
      <CallApi />
    </div>
  );
}

export default App;
