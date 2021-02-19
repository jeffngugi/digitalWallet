import React,{useRef} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import { RNCamera } from 'react-native-camera'
import {COLORS, FONTS,SIZES,icons, images} from '../constants'

const Scan = ({navigation}) => {
    const camera = useRef(null);

    function renderHeader(){
        return(
            <View style={{flexDirection:'row', marginTop:SIZES.padding*4, paddingHorizontal:SIZES.padding*3}}>
                <TouchableOpacity
                    style={{width:45, alignItems:'center', justifyContent:'center'}}
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Image 
                        source={icons.close}   
                        style={{height:20,width:20, tintColor:COLORS.white, alignItems:'center', justifyContent:'center'}}
                    />
                </TouchableOpacity>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:COLORS.white, ...FONTS.body3}}> Scan for payment</Text>
                </View>
                <TouchableOpacity
                    style={{height:45, width:45, backgroundColor:COLORS.green, borderRadius:10, alignItems:'center', justifyContent:'center'}}
                    onPress={()=>console.log('info')}
                >
                    <Image
                        source={icons.info}
                        style={{
                            height:25, width:25, tintColor:COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderPaymentMethods(){
        return(
            <View style={{
                position:'absolute',
                bottom:0, 
                left:0, 
                right:0, 
                height:220, 
                padding:SIZES.padding*3, 
                borderTopRightRadius:SIZES.radius, 
                borderTopLeftRadius:SIZES.radius, 
                backgroundColor:COLORS.white
            }}>
                <Text style={{...FONTS.h4}}>
                    Another payment Method
                </Text>

                <View style={{
                    flex:1,
                    flexDirection:'row',
                    alignItems:'flex-start',
                    marginTop:SIZES.padding*2
                }}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} 
                        onPress={()=>console.log('Phone number')}
                    >
                        <View style={{
                            width:40, height:40, backgroundColor:COLORS.lightpurple, alignItems:'center', justifyContent:'center', borderRadius:10
                        }}>
                            <Image source={icons.phone} resizeMode='cover' 
                            style={{height:25, width:25, tintColor:COLORS.purple}}
                            />
                           
                        </View>
                        <Text style={{marginLeft:SIZES.padding, ...FONTS.body4}}>Phone Number</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flexDirection:'row', alignItems:'center', marginLeft:SIZES.padding*2}}
                        onPress={()=>console.log('barcode')}
                    >
                        <View style={{
                            width:40, height:40, backgroundColor:COLORS.lightGreen, alignItems:'center', justifyContent:'center', borderRadius:10
                        }}>
                            <Image source={icons.barcode} resizeMode='cover'
                                style={{height:25, width:25, tintColor:COLORS.primary}}
                        />
                       
                        </View>
                        <Text style={{marginLeft:SIZES.padding, ...FONTS.body4}}>Barcode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderScanFocus(){
        return(
            <View
                style={{flex:1, alignItems:'center', justifyContent:'center'}}
            >
                <Image source={images.focus} resizeMode='stretch'
                style={{width:200, height:200, marginTop:'-55%'}}

                />
            </View>
        )
    }

    function onBarCodeRead(result){
        console.log(result.data)
    }
    return (
        <View style={{flex:1, backgroundColor:COLORS.transparent}}>
            <RNCamera
                ref={camera}
                style={{
                    flex:1
                }}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onBarCodeRead}
                androidCameraPermissionOptions={{
                    title:"Permision to use camera",
                    message:"Camera is required for barcode scanning",
                    buttonPositive:"OK",
                    buttonNegative:"Cancel"

                }}
            >
                {renderHeader()}
                {renderScanFocus()}
                {renderPaymentMethods() }
            </RNCamera>
        </View>
    )
}

export default Scan
