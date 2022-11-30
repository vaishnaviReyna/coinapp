import { View, Text, Button,Dimensions  } from 'react-native'
import React, { useEffect } from 'react';
import {LineChart} from "react-native-chart-kit";
import {useSelector ,useDispatch} from "react-redux";
import {singleCoin} from "../../redux/action/index";

const Login = ({route,coingecko_score}) => {
  const {id} = route.params.item;
  const  dispatch = useDispatch();
  const singleCoinInfo = useSelector((state)=>state.userReducer.lists);
  console.log("cc",singleCoinInfo);

  useEffect(()=>{
    //coingecko_score

    dispatch(singleCoin(id))
},[])

  return (
    <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["coingecko", "developer", "community", "liquidit", "public_interes"],
      datasets: [
        {
          data: [
            {coingecko_score},99.241,83.341,100.011,0.073
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}

export default Login