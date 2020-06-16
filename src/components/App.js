import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import LoginPage from '../pages/LoginPage';
import HeaderContainer from '../containers/HeaderContainer';
import UserListPage from '../pages/Users/UserListPage';
import UserCreatePage from '../pages/Users/UserCreatePage';
import UserDetailPage from '../pages/Users/UserDetailPage';
import TVmazeShowsPage from '../pages/tvmaze/TVmazeShowsPage';


const App = () =>{

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <HeaderContainer />
                    <Switch>
                        <Route path="/" exact component = {LoginPage}/>
                        <Route path="/users/list" exact component = {UserListPage}/>
                        <Route path="/users/create" exact component = {UserCreatePage}/>
                        <Route path="/users/detail/:username" exact component = {UserDetailPage}/>
                        <Route path="/shows/list" exact component = {TVmazeShowsPage}/>
                    </Switch>
                </div>
            </Router>
        </div>

    );
}

export default App;