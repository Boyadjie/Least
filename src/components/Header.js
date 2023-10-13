import {StyleSheet, View} from 'react-native';

export const Header = ({children}) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
		backgroundColor: 'white',
		elevation: 2,
	},
});
