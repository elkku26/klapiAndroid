/* 
Copyright (c) 2020 Elias Mäkelä
*/

import React from 'react'
import {Text, View, Button} from 'react-native' 
import styles from '../stylesheets/MainStyleSheet'
import {useTranslation} from 'react-i18next'


//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../services/i18n'


const Map = ({history}) => {

	const { t, i18n }  = useTranslation();

	
	return (
		<View style={styles.mainViewContainer}>
			<View style={styles.h1Container}>
				<Text style={styles.h1Text}>{t('navBar.map')}</Text>
			</View>
		</View>
    )
}


export default Map
