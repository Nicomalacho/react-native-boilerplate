import React, {Component} from 'react'
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native'
import PropTypes from 'prop-types';
import styles from './Login.component.style'
import Touchable from 'react-native-platform-touchable';
import translate from '../../utils/language.utils';

class Login extends Component {
    render() {
        const {username, password, token, setUsername, setPassword} = this.props;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.formLabel}>{token}</Text>
                <Text style={styles.formLabel}>{translate('LOGIN_username')}</Text>
                <TextInput style={styles.titleTextInput}
                           onChangeText={setUsername} value={username}/>
                <Text style={styles.formLabel}>{translate('LOGIN_password')}</Text>
                <TextInput style={styles.titleTextInput}
                           secureTextEntry={true}
                           onChangeText={setPassword} value={password}/>
                <Touchable style={styles.aboutUsWrapper} onPress={this.props.onLoginPress}>
                    <Text style={styles.aboutUs}>login</Text>
                </Touchable>
            </KeyboardAvoidingView>
        )
    }
}

Login.propTypes = {
    setUsername: PropTypes.func,
    setPassword: PropTypes.func,
    username: PropTypes.string,
    token: PropTypes.string,
    password: PropTypes.string
};
export default Login;