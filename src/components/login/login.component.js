import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import StyleSheetCommon from '../../common/style-sheet/style-sheet.common';

class LoginComponent extends Component {
    render() {
        return (
            <View style={[StyleSheetCommon.center]}>
                <TextInput placeholder={'User name or Email'}
                           style={[
                               LoginComponentStyles.container__item,
                               LoginComponentStyles.userNameOrEmail
                           ]}/>
                <TextInput placeholder={'Password'}
                           style={[
                               LoginComponentStyles.container__item,
                               LoginComponentStyles.password
                           ]}/>
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