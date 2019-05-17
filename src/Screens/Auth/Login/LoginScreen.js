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
	StatusBar,
	ImageBackground,
	Dimensions
} from 'react-native';
import { tsConstructorType } from '@babel/types';
import bgImage from '../../../../assets/images/background.jpg';

const {
	width: WIDTH
} = Dimensions.get('window')
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

	render() {
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={{ flex: 1 }}>
					<TextInput
						style={styles.input}
						placeholder={'Username'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
					/>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1,
		width: null,
		height: null,
		justifyContent: 'center',
		alignItems: 'center'
	},

	logoContainer: {
		alignItems: 'center'
	},

	logoText: {
		color:'white',
		fontSize: 20,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	},
	input: {
		width: WIDTH - 55,
		height: 25,
		borderRadius: 25,
		fontSize: 16,
		paddingLeft: 45,
		backgroundColor: 'rgba(0,0,0,0.35)'
		

	}
});
