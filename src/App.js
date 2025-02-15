import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import DataFetcher from "./components/ch04/DataFetcher";
import PageCounter from "./components/ch04/PageCounter";
import ThemedButton from "./components/ch04/ThemedButton";
import ThemeProvider from "./components/ch04/ThemeProvider";
import ToggleLight from "./components/ch04/ToggleLight";
import ToggleLightPlus from "./components/ch04/ToggleLightPlus";
import UserControls from "./components/ch04/UserControls";
import UserInfo from "./components/ch04/UserInfo";
import UserProvider from "./components/ch04/UserProvider";
import Home from "./components/ch05/Home";
import About from "./components/ch05/About";
import PageNotFound from "./components/ch05/PageNotFound";
import UserList from "./components/ch05/UserList";
import Pagination from "./components/ch05/Pagination";
import SimpleForm from "./components/ch06/SimpleForm";
import FocusInput from "./components/ch06/FocusInput";
import CompleteForm from "./components/ch06/CompleteForm";
import { Lecture } from "./components/ch07/Examples";
import Posts from "./components/ch07/Post/Posts";

const usersList = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Abbes" },
  { id: 6, name: "Aron" },
  { id: 7, name: "Abram" },
];

function App() {
  return (
    <>
    <div>
      <Posts />
    </div>
    <div>
      <Lecture />
      <CompleteForm />
      <FocusInput />
      <SimpleForm />
      {/* Pagination */}
      <Pagination />
      {/* List des utilisateurs */}
      <UserList users={usersList} />
      {/* use of react router dom */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <br />
      <ThemeProvider>
        <ThemedButton>Themed Button</ThemedButton>
      </ThemeProvider>
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
      <DataFetcher />
      <UserProvider>
        <UserInfo />
        <UserControls />
      </UserProvider>
    </div>
    </>
    
  );
}

export default App;
