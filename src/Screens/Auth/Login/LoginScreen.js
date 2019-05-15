import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	AsyncStorage,
	ActivityIndicator,
	Image,
	StatusBar
} from 'react-native';
import { tsConstructorType } from '@babel/types';

export default class LoginScreen extends React.Component {
	static navigationOptions = () => ({
		title: 'Login'
	});

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			TextInputUser: '',
			TextInputPassword: ''
		};
	}

	validateInput = () => {
		const { TextInputUser, TextInputPassword } = this.state;
		if (!TextInputUser) {
		}
	};
}
