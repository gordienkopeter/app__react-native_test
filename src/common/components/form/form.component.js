import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.formFields = props.formFields;
    }

    get renderFormFieldHandler() {
        return (formField) =>
            <TextInput placeholder={formField.placeholder}
                       key={formField.key}
                       style={
                           [
                               FormComponentStyleSheet.container__item,
                           ]
                               .concat(formField.styles)
                       }
                       value={formField.model}
                       onChangeText={formField.modelChange}/>;
    }

    render() {
        return (
            <View style={[FormComponentStyleSheet.container]}>
                {this.formFields.map(this.renderFormFieldHandler)}
            </View>
        );
    }
}

const FormComponentStyleSheet = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    container__item: {
        width: 320,
        height: 50,
        textAlign: 'center'
    }
});

export {FormComponent, FormComponentStyleSheet}