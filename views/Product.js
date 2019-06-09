import { View, Text, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';
import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            mode:'dark'
        }
    }
    render() {
        return (
            <Container>
                <StatusBar
                    barStyle={this.state.mode==='light'?('dark-content'):('light-content')}
                />
                <Content style={{ backgroundColor: this.state.mode==='light'?('#f4f5f5'):('#fff') }}> 

                    {/* header started */}
                    <TouchableOpacity style={{ position: 'absolute', height: 100, width: Dimensions.get('window').width, zIndex: 9999, paddingTop: 50}}>
                        <Button transparent>
                            <Icon name='arrow-back' style={{ color: this.state.mode==='light'?('#000'):('#fff'), marginLeft: 10, }} />
                        </Button>
                    </TouchableOpacity>
                    {/* header ended */}

                    {/* top view */}
                    <View style={{ paddingTop: 0, backgroundColor: '#fff', overflow: 'hidden', borderBottomLeftRadius: 75 }}>
                        <Image
                            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
                            source={require('../assets/product1.jpg')}
                        />
                    </View>
                    {/* top view ended */}

                    {/* new old view started */}
                    <View style={{backgroundColor:'rgba(84,182,229,1)', height:70, width:70, borderRadius: 70, position:'absolute', top: Dimensions.get('window').width-35, right:20, justifyContent:'center'}}>
                        <Text style={{alignSelf: 'center', fontSize:20, color:'#fff', fontWeight: '300',}}>NEW</Text>
                    </View>
                    {/* new old view ended */}

                    {/* Description view started */}
                    <View style={{flex:1, marginTop:25, paddingLeft: 20, flexDirection: 'row',alignItems: 'flex-end',}}>
                        <View>
                            <Text style={{color:'#4d4e4f'}}>Bikes</Text>
                            <Text style={{paddingTop:15, fontSize:25, fontWeight:'300'}}>Classic 350</Text>
                            <Text style={{fontWeight:'bold'}}>INR 2,50,000</Text>
                        </View>
                        <View style={{position:'absolute', right:0, paddingRight: 20,paddingTop:10, flexDirection:'row',}}>
                            <View>
                                <Icon name='pin' style={{ color: '#000', marginLeft: 10, }} />
                            </View>
                            <View style={{paddingLeft:10}}>
                                <Text>in DLF Mall,</Text>
                                <Text>Jalandhar, Punjab</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width:Dimensions.get('window').width, marginTop:20,}}>
                        <View style={{backgroundColor:this.state.mode==='light'?('#fff'):('#f4f5f6'), width:Dimensions.get('window').width-30, alignSelf:'center', borderRadius:30}}>
                            {/* color for dark images = f4f5f6 */}
                            <View style={{flexDirection:'row'}}>
                                <Icon name='checkmark' style={{ color: 'green', margin: 10, marginBottom: 5,}} /> 
                                <Text style={{marginTop:15, fontWeight:'bold'}}>Brand: <Text style={{fontWeight:'normal'}}>Royal Enfield</Text></Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name='checkmark' style={{ color: 'green', margin: 10, marginTop:0, marginBottom: 5,}} /> 
                                <Text style={{marginTop:5, fontWeight:'bold'}}>Model: <Text style={{fontWeight:'normal'}}>2017</Text></Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name='checkmark' style={{ color: 'green', margin: 10, marginTop:0, marginBottom: 5,}} /> 
                                <Text style={{marginTop:5, fontWeight:'bold'}}>KM Driven: <Text style={{fontWeight:'normal'}}>11,700</Text></Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name='checkmark' style={{ color: 'green', margin: 10, marginTop:0, marginBottom: 5,}} /> 
                                <Text style={{marginTop:5, fontWeight:'bold'}}>Condition: <Text style={{fontWeight:'normal'}}>Good</Text></Text>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingLeft:15, paddingTop:15, flex:1}}>
                        <Text style={{fontWeight:'bold'}}>DESCRIPTION</Text>
                        <Text>
                            The Royal Enfield Classic 350 recently received a the range of official accessories to improve usability and also to enhance its looks. They include alloy wheeels.
                        </Text>
                    </View>

                    {/* Description view ended */}

                </Content>
            </Container>
        )
    }
}

export default Product;