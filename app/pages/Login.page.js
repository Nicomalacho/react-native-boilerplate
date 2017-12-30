import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUsername, setPassword, setToken} from '../redux/actions/index.actions';
import Login from '../components/Login/Login.component';
import PropTypes from 'prop-types';
import offlineStorage from '../utils/offline.utils.js';
import {NavigationActions} from 'react-navigation';

class LoginPage extends Component {
  render () {
    const {username, password, setUsername, setPassword} = this.props;
    return (
      <Login setUsername={setUsername} setPassword={setPassword} username={username} password={password} onLoginPress={this.props.onLoginPress}/>
    );
  }
}

LoginPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onLoginPress: PropTypes.func,
  setToken: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setUsername(username)),
  setPassword: (password) => dispatch(setPassword(password)),
  onLoginPress: () => {
    dispatch(setToken({token: '123456789'}));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'home'})
      ]
    }));
    offlineStorage.addToken({token: '123456789'});
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
