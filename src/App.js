import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Projects from './components/projects/Projects/Projects';

import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';

import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/privateRoute';

// Check if we have a token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
