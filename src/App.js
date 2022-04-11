import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Main } from "./pages";
import "./App.css";
import Amazon from "./pages/Amazon/Amazon";
import Chat from "./pages/Chat/Chat";
import Movie from "./pages/Movie/Movie";
import Covid from "./pages/Covid/Covid";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/z-shop" exact component={Amazon} />
          <Route path="/covid" exact component={Covid} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/movie" exact component={Movie} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
