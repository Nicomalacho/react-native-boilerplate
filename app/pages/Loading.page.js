import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

class LoadingPage extends Component {
  componentDidUpdate () {
    Object.getOwnPropertyNames(this.props.token).length === 0 ? this.props.goAuth() : this.props.goHome();
  }
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }
}

LoadingPage.propTypes = {
  token: PropTypes.object,
  goAuth: PropTypes.func,
  goHome: PropTypes.func
};

const mapStateToProps = (state) => ({
  token: state.login.token
});

const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: 'home'})
    ]
  })),
  goAuth: () => dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: 'login'})
    ]
  }))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
