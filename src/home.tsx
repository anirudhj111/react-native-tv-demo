import React, {useState, useEffect}from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList} from "react-native";
const {height, width} = Dimensions.get('window')

const Home = () => {

    const [imageIndex, setIndex] = useState(0)

    // const ImageObj = [
    //     {
    //         image : require('../assets/image_1.png')
    //     },
    //     {
    //         image : require('../assets/image_2.png')
    //     },
    //     {
    //         image : require('../assets/image_3.png')
    //     },
    //     {
    //         image : require('../assets/image_4.png')
    //     },
    // ]

    return(
        <View style={styles.container}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{display:'flex', flexDirection:'column', margin: '2%', justifyContent:'center', alignItems:'center', width:'10%'}}>
                    <Image style={{height: height*0.05, width: width*0.05}} resizeMode={'contain'} source={require('../assets/tv-app.png')} />
                    <Text style={{fontSize: 16}}>TvApp</Text>
                </View>
                <View style={{display:'flex', flexDirection:'column', margin: '2%', justifyContent:'center', alignItems:'center', width:'10%'}}>
                    <Image style={{height: height*0.05, width: width*0.05}} resizeMode={'contain'} source={require('../assets/user.png')} />
                </View>
            </View>
            <ImageBackground resizeMode={'stretch'} source={require('../assets/movie1.png')} style={{display:'flex', flexDirection:'row',height:height*0.55, width:width*0.95, alignSelf:'center', alignItems:'center', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => {setIndex((imageIndex-1)%4); console.log("decrease")}}>
                    <Image style={{height:height*0.1, width:width*0.05, tintColor:'#fff'}} source={require('../assets/left-arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setIndex((imageIndex+1)%4); console.log("increase")}}>
                    <Image style={{height:height*0.1, width:width*0.05, tintColor:'#fff'}} source={require('../assets/right-arrow.png')}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{display:'flex', flexDirection:'column', marginHorizontal: '2.5%', justifyContent:'center', alignItems:'center', width:'10%', marginVertical:'1%'}}>
                <Text style={{fontSize: 24, fontWeight:'bold'}}>Shows</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', width:'95%', alignSelf:'center'}}>
                {
                    [1,2,3,4,5,6,7,8].map((item, key) => {
                        return(
                            <ImageBackground key={key} style={{height:height*0.2, width: height*0.2,marginRight:'1%'}} resizeMode={'cover'} source={require(`../assets/movie1.png`)}>
                                <Text style={{marginHorizontal:'1%', fontWeight:'bold'}}>Movie {item}</Text>
                            </ImageBackground>
                        )
                    })
                    // <FlatList 
                    //    data={[1,2,3,4,5,6,7,8]}
                    //    horizontal={true}
                    //    scrollEnabled={true}
                    //    renderItem={({item}) => {
                    //         return(
                    //             <ImageBackground key={item} style={{height:height*0.2, width: height*0.2,marginRight:'1%'}} source={require('../assets/movie1.png')}>
                    //                 <Text>Movie {item}</Text>
                    //             </ImageBackground>
                    //         )
                    //    }}
                    // />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : "100%",
        flex : 1,
        flexDirection:'column',
        backgroundColor:'#0c235c'
    }
})

export default Home