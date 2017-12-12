import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import StyleSheetCommon from '../../common/style-sheet/style-sheet.common';
import {FormComponent} from "../../common/components/form/form.component";

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
    }

    get loginFormFields() {
        return [
            {
                key: 'login',
                placeholder: 'User name or Email',
                model: this.state.login,
                modelChange: (login) => this.setState({login}),
                styles: [],
            },
            {
                key: 'password',
                placeholder: 'Password',
                model: this.state.password,
                modelChange: (password) => this.setState({password}),
                styles: [],
            },
        ];
    }

    render() {
        return (
            <View style={[StyleSheetCommon.center]}>
                <FormComponent formFields={this.loginFormFields}/>
            </View>
        );
    }
}

const LoginComponentStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    container__item: {
        width: 320,
        height: 50,
        textAlign: 'center'
    },
    userNameOrEmail: {},
    password: {}
});

export {LoginComponent, LoginComponentStyles}