import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Header} from '../src/components/Header';
import {StatusBar} from 'expo-status-bar';

export const Home = () => {
	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<Header>
				<Image source={require('../assets/logo.png')} style={styles.logo} />
			</Header>
			<Text style={styles.hello}>
				Bienvenue <Text style={styles.name}>Emeric</Text> !
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.ctaInfos}>Prend des habitudes de consommation</Text>
				<Text style={styles.ctaInfos}>éco-résponsable en créant une liste</Text>
				<Text style={styles.ctaInfos}>
					et découvre les suggestions de la semaine
				</Text>
			</View>
			<Pressable style={styles.btn} onPress={() => null}>
				<Text style={styles.btnTxt}>Mes Listes</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 0,
		flex: 1,
		backgroundColor: '#fff',
	},
	logo: {
		width: 60,
		height: 60,
		alignSelf: 'center',
	},
	hello: {
		paddingTop: 25,
		textAlign: 'center',
		fontSize: 25,
	},
	name: {
		color: '#D3664A',
	},
	infoContainer: {
		padding: 10,
	},
	ctaInfos: {
		textAlign: 'center',
		fontSize: 12,
	},
	btn: {
		marginTop: 20,
		alignSelf: 'center',
		maxWidth: 150,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#D3664A',
		borderRadius: 58,
		paddingVertical: 12,
		paddingHorizontal: 32,
		elevation: 1,
	},
	btnTxt: {
		color: 'white',
	},
});
