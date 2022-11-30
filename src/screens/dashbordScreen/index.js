
import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image,TouchableOpacity,Dimensions } from 'react-native'
import { FlashList } from "@shopify/flash-list";
import {LineChart} from "react-native-chart-kit";
 import {useSelector ,useDispatch} from "react-redux";
 import styles from './styles';
import {getCoin} from "../../redux/action/index";

const s_data={
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1268.15,
    "market_cap": 152876856434,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 152876856434,
    "total_volume": 7880088064,
    "high_24h": 1277.05,
    "low_24h": 1206.51,
    "price_change_24h": 50.72,
    "price_change_percentage_24h": 4.16588,
    "market_cap_change_24h": 6177767574,
    "market_cap_change_percentage_24h": 4.21118,
    "circulating_supply": 120520143.777399,
    "total_supply": 120520143.777399,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -73.98946,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 292954.00894,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
        "times": 99.43214392570022,
        "currency": "btc",
        "percentage": 9943.214392570022
    },
    "last_updated": "2022-11-30T12:35:36.585Z"
}
const Dashbord = () => {
    const[data,setData]=useState();
    const[singleData,setsingleData]=useState(s_data);
    const  dispatch = useDispatch();
    const coinInfo =useSelector((state)=>state.userReducer.lists);
    useEffect(()=>{
        dispatch(getCoin())
        setData(coinInfo)
    },[])

function display(i){
  setsingleData(i);
}
console.log("singleData",singleData);

    const renderItem = ({item}) =>(
        <TouchableOpacity style={styles.itemList} onPress={()=>display(item)} >
            <View style={styles.itemWrapper} >
            <Image source={{uri:item.image}} style={styles.image} />
            <View style={styles.itemDec}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.symbol}</Text>
            </View>
            </View>
            <View>

            <View style={styles.itemWrapper}>
                <View>
                <Text style={styles.title}>${item.current_price}</Text>
          <Text style={styles.subtitle}>{item.price_change_percentage_24h}%</Text>
                </View>
         
            </View>
      
        </View>

          </TouchableOpacity>
    );
  return (
    <View style={styles.container}>
        <View style={{flex:1}}>
        <View>
    <Text>{singleData.id}</Text>
    <LineChart
      data={{
        labels: ["coingecko", "developer", "community", "liquidit", "public_interes"],
        datasets: [
          {
            data: [
              100,99.241,83.341,100.011,0.073
            ]
          }
        ]
      }}
      width={340}// from react-native
      height={180}
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
          borderRadius: 16,
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
        </View>

      <View style={{flex:2}}>
      {
      data?<View style={{height:800}}>
      <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={200}
    />
      </View> : <View><Text>Loading</Text></View>}
      </View>
    </View>
  )
}

export default Dashbord