import "./App.css";
import Challenge_1_exc1 from "./challenge_1/chal_1";
import DisplayUsers from "./challenge_2/exc_1";
import UpdateStateObject from "./challenge_3/exc_3";
import UseEffectDemo from "./challenge_4/use_Effect";
import FetchingData from "./challenge_5/FetchUserData";
import FetchConditionalRendering from "./conditional_rendering/exc1";
import DisplayUser from "./circuit_overview/exc1";
import {
  ToggleComp,
  LoginLogoutComp,
  ThirdToggle,
} from "./citcut-conditional-challenge/exc1";
import Component_1 from "./render-re-render-mount-unmount/exc1";
import Header from "./project-structure/header";
import NavBar from "./project-structure/nav-bar";
import CommonFooter from "./project-structure/footer/common-footer";
import Home from "./project-structure/pages/home";
import About from "./project-structure/pages/about";
import ListingPersons from "./listing-displaying-list/list-person";
import LoginForm from "./form-control/login-form";
import FormDataApi from "./form-data/form-data-api";
import CustomHookExc1 from "./custom-hook/exc1/custom-hook-exc1";
import FetchMyInfo from "./custom-hook/exc2/data-fetching-ui";
import NavBarCmp from "./context-api/context-api/nav-bar";
import ReducerDemo from "./use-reducer-state-management-tool/reducer-exc1";
import PersonList from "./performace-improvement/exc1/PersonList";
import UseCallBackDemo from "./use-call-back/test-use-call-back";
import TransitionDemo from "./use-transition/use-transition-demo";
import LazyLoading from "./lazy-loading/LazyLoadingDemo";

function App() {
  return (
    <>
      {/* <Challenge_1_exc1 /> */}
      {/* <DisplayUsers /> */}
      {/* <UpdateStateObject /> */}
      {/* <UseEffectDemo /> */}
      {/* <FetchingData /> */}
      {/* <FetchConditionalRendering /> */}
      {/* <DisplayUser /> */}
      {/* <LoginLogoutComp /> */}
      {/* <ThirdToggle /> */}
      {/* <Component_1 /> */}
      {/* <NavBar />
      <Header />
      <CommonFooter /> */}

      {/* <Home />
      <About /> */}

      {/* <ListingPersons /> */}
      {/* <LoginForm /> */}
      {/* <FormDataApi /> */}
      {/* <CustomHookExc1 /> */}
      {/* <FetchMyInfo /> */}
      {/* <NavBarCmp /> */}
      {/* <ReducerDemo /> */}
      {/* <PersonList /> */}
      {/* <UseCallBackDemo /> */}
      {/* <TransitionDemo /> */}
      <LazyLoading />
    </>
  );
}

export default App;
