import {StyleSheet} from 'react-native';

import colors from '../../theam/colors';

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginHorizontal:10,
       marginVertical:10,
    },
    itemList:{
        padding:8,
        marginBottom:5,
        backgroundColor:colors.yellow,
        flexDirection:"row",
        borderWidth:1,
        borderStyle:"solid",
        justifyContent:"space-between",
    },
    itemWrapper:{
        flexDirection:"row" ,
    },
    itemDec:{
        marginLeft:10,
    },
    title: {
        fontSize: 18,
        fontWeight:"bold"
      },
      subtitle: {
        marginTop: 4,
        fontSize: 14,
        color:colors.red
      },
      image: {
        height: 48,
        width: 48,
      },
});
export default styles;