import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuctionShowPage from './components/AuctionShowPage';
import {AuctionIndexPage} from './components/AuctionIndexPage';

import { Session, User} from './requests';
import Navbar from './components/Navbar';
import AuctionNewPage from './components/AuctionNewPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
// import NotFoundPage from './components/NotFoundPage';
import WelcomePage from './components/WelcomePage';
// import './App.css';

 
class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    user: null
}}

componentDidMount(){
  this.getCurrentUser()
}

getCurrentUser = () => {
  return User.current().then(user =>{
    if(user?.id){
      this.setState(state =>{
        return {user}
      })
    }
  })
}
 onSignOut = (props) =>{
   
  Session.destroy().then((res) => {
    this.setState((state) => {
      return { user: null };
    });
  });

  

}
render(){
 
 return (
   <div className="App">
     <BrowserRouter>
      <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
       <Switch>
       <Route exact path='/' component={WelcomePage}/>
         <Route
         exact
         path='/sign_in'
         render={ routeProps => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} /> }
         /> -
         <Route
         exact
         path='/sign_up'
         render={routeProps => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}
         /> -
         <Route exact path='/auctions'>
           <AuctionIndexPage />
         </Route>
         <AuthRoute
           isAllowed={!!this.state.user}
           exact
           path='/auctions/new'
           component={AuctionNewPage}
         /> -
         <Route
         isAllowed={!!this.state.user}
         exact
         path='/auctions/:id'
         component={AuctionShowPage}
         />
       </Switch>
     </BrowserRouter>
   </div>
 )}
}
 
export default App;