import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//local
// import { Home } from 'page';
import TopHeader from 'shared/TopHeader';
import Home from 'page/Home/Home';
import Login from 'page/Login/Login';
import SignUp from 'page/SignUp/SignUp';
import { connect } from 'react-redux';
import { actions } from 'store';

function App(props) {
  const darkMode = props.darkMode;
  const darkModeSet = props.darkModeSet;

  useEffect(() => {
    const savedDarkMode = window.sessionStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) darkModeSet(savedDarkMode);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="bg-gradient-to-r from-primaryStart to-primaryEnd min-h-screen dark:from-primaryStartWarm dark:to-primaryEndWarm">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { darkMode: state.darkMode };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    darkModeSet: (value) => dispatch(actions.darkMode.set(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
