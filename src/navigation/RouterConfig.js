import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Onboard from "../components/Onboard/Onboard";
import OnboardSuccess from "../components/Onboard/OnboardMessage/Success";
import CreateNote from "../components/Notes/CreateNote/CreateNote";
import AppLayout from "./AppLayout";
import FolderList from "../components/Folders/FoldersList/FolderList";
import HomeFolderList from '../components/Folders/FoldersList/HomeFolderList'
import Search from "../components/Search/Search";
import FolderView from "../components/Folders/FolderView/FolderView";
import Study from "../components/Study/Study";
import CreateFlashBack from "../components/Study/FlashBack/Create-FlashBack/Create-FlashBack";
import EditFlashBack from "../components/Study/FlashBack/Edit-FlashBack/Edit-FlashBack";
import Assesment from "../components/Assesments/Assesment";
import CreateAssesment from "../components/Assesments/Create_Assesment/CreateAssesment";
import UpdateAssesment from "../components/Assesments/Create_Assesment/UpdateAssesment";
import NewAssesment from "../components/Assesments/Create_Assesment/NewAssesment";

import Cart from "../components/Cart/Cart";

const RouterConfig = () => {
  return (
    <Router>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/onboard" component={Onboard} />
            <Route path="/success" component={OnboardSuccess} />
            <AppLayout>
              <Route path="/home" component={HomeFolderList} />
              <Route path="/cart" component={Cart} />
              <Route path="/folders" component={FolderList} />
              <Route path="/folder/:id" component={FolderView} />
              <Route path="/search" component={Search} />
              <Route path="/create-note" component={CreateNote} />
              <Route path="/study" component={Study} />
              <Route path="/flashCard" component={CreateFlashBack} />
              <Route path="/flashCardEdit" component={EditFlashBack} />
              <Route path="/assesment" component={Assesment} />
              <Route path="/create-assesment" component={CreateAssesment} />
              <Route path="/edit-assesment" component={UpdateAssesment} />
              <Route path="/new-assesment" component={NewAssesment} />
              
            </AppLayout>
        </Switch>
    </Router>
  );
};

export default RouterConfig;
