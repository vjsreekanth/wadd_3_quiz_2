import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuctionShowPage from './components/AuctionShowPage';
import {AuctionIndexPage} from './components/AuctionIndexPage';

import { Session, User} from './requests';
import NavBar from './components/NavBar';
import AuctionNewPage from './components/AuctionNewPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
// import NotFoundPage from './components/NotFoundPage';
import WelcomePage from './components/WelcomePage';

 
const App = () => {
 const [appState, setAppState] = useState({
  
   user: null
 });
 
 const getCurrentUser = () => {
   User.current().then(data => {
     if (typeof data.id !== "number"){
       setAppState({ ...appState, user: null });
     } else {
       setAppState({...appState, user: data });
     }
   });
 }; 
 
 const onSignOut = () => {
   Session.destroy().then(setAppState({ ...appState, user: null}));
 };
 
 useEffect(() => {
   getCurrentUser();
 }, []);
 
 return (
   <div className="container">
     <BrowserRouter>
       <NavBar
       currentUser={appState.user}
       onSignOut={onSignOut}
       />
       <Switch>
       <Route component={WelcomePage}/>
         <Route
         exact
         path='/sign_in'
         render={ routeProps => <SignInPage {...routeProps} onSignIn={getCurrentUser} /> }
         />
         <Route
         exact
         path='/sign_up'
         render={routeProps => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
         />
         <Route exact path='/auctions'>
           <AuctionIndexPage />
         </Route>
         <AuthRoute
           isAuthenticated={!!appState.user}
           exact
           path='/auctions/new'
           component={AuctionNewPage}
         />
         <AuthRoute
         isAuthenticated={!!appState.user}
         exact
         path='/auctions/:id'
         component={AuctionShowPage}
         />
       </Switch>
     </BrowserRouter>
   </div>
 )
}
 
export default App;