/**
 * UI 通过 外部ScrollView 内部 FlatList或者 ScrollView 实现 (使用三方库react-native-scrollable-tab-view&&react-native-underline-tabbar)
 * 逻辑 通过 数据中 id 和 tag实现
 * */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Linking,
    ScrollView
} from 'react-native'
const { width } = Dimensions.get('window')
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from 'react-native-underline-tabbar'

export default class One extends Component {
    // 构造
    constructor(props) {
        super(props)
        // 初始状态
        this.state = {
            startEdit: false, // 是否点击了编辑 默认未点击false
            myApplyData: [],
            otherApplyData: [],
            applyData: [
                {
                    title: '我的应用',
                    sub: [
                        {
                            id: '10086',
                            icon:
                                'https://ww1.sinaimg.cn/large/0065oQSqgy1fu39hosiwoj30j60qyq96.jpg',
                            name: '价费通10086',
                        },
                        {
                            id: '10010',
                            icon:
                                'https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg',
                            name: '展示中心10010',
                        }
                    ],
                },
                {
                    title: '政务服务',
                    sub: [
                        {
                            subTitle: '政企',
                            sub: [
                                {
                                    id: '10086',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqgy1fu39hosiwoj30j60qyq96.jpg',
                                    name: '价费通10086',
                                    tag: true,
                                },
                                {
                                    id: '10010',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg',
                                    name: '展示中心10010',
                                    tag: true,
                                },
                                {
                                    id: '9',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg',
                                    name: '办事平台',
                                    tag: false,
                                },
                                {
                                    id: '10',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqgy1ftwcw4f4a5j30sg10j1g9.jpg',
                                    name: '少儿图书馆',
                                    tag: false,
                                },
                            ],
                        },
                        {
                            subTitle: '第三方服务',
                            sub: [
                                {
                                    id: '11',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '12',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqgy1ftwcw4f4a5j30sg10j1g9.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '13',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '14',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqgy1ftwcw4f4a5j30sg10j1g9.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '15',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqgy1ftwcw4f4a5j30sg10j1g9.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '16',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftu6gl83ewj30k80tites.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '17',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftu6gl83ewj30k80tites.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '18',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftu6gl83ewj30k80tites.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    title: '政企应用',
                    sub: [
                        {
                            subTitle: '按主题',
                            sub: [
                                {
                                    id: '19',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftdtot8zd3j30ju0pt137.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '20',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ft5q7ys128j30sg10gnk5.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                            ],
                        },
                        {
                            subTitle: '按部门',
                            sub: [
                                {
                                    id: '21',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ftdtot8zd3j30ju0pt137.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                            ],
                        },
                        {
                            subTitle: '按证件',
                            sub: [
                                {
                                    id: '22',
                                    icon:
                                        'https://ww1.sinaimg.cn/large/0065oQSqly1ft5q7ys128j30sg10gnk5.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                            ],
                        },
                        {
                            subTitle: '主体周期',
                            sub: [
                                {
                                    id: '23',
                                    icon:
                                        'http://ww1.sinaimg.cn/large/0065oQSqly1fsoe3k2gkkj30g50niwla.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                                {
                                    id: '24',
                                    icon:
                                        'http://ww1.sinaimg.cn/large/0065oQSqly1fsoe3k2gkkj30g50niwla.jpg',
                                    name: '价费通',
                                    tag: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    }

    componentDidMount() {
        var data = this.state.applyData
        //赋值 我的应用数据
        this.setState({
            myApplyData: data[0].sub,
        })
        //赋值 其他应用数据
        this.setState({
            otherApplyData: data.slice(1),
        })
    }


    /**
     * 点击编辑
     * */
    editAction = () => {
        this.setState({
            startEdit:!this.state.startEdit
        })
    }

    /**
     *  去除我的应用
     * */
    subAction = item => {
        var data = this.state.myApplyData  // 我的应用数据
        var otherData = this.state.otherApplyData  //其他应用数据
        var selectId = item.item.id  // 选中的id

        //修改我的应用数据源
        data.map((item,index) =>{
            if(item.id == selectId){
                data.splice(index,1)
            }
        })

        //修改其他应用数据源
        otherData.map((item,index) =>{
            item.sub.map((item,index) =>{
                item.sub.map((item,index) =>{
                    if(item.id == selectId){
                        item.tag = false
                    }
                })
            })
        })

        // 重新赋值
        this.setState({
            myApplyData:data,
            otherApplyData:otherData
        })

    }

    /**
     * 点击其他应用
     * */
    otherAction =(item) =>{
        var data = this.state.myApplyData  // 我的应用数据
        var otherData = this.state.otherApplyData  //其他应用数据
        var selectId = item.id   //id
        console.log(item)
        //根据数据中tag值判断
        if(item.tag == true){
            //在我的应用当中,需要去除
            data.map((item,index) =>{
                if(item.id == selectId){
                    data.splice(index,1)
                }
            })
            otherData.map((item,index) =>{
                item.sub.map((item,index) =>{
                    item.sub.map((item,index) =>{
                        if(item.id == selectId){
                            item.tag = false
                        }
                    })
                })
            })

        }else {
            //不在我的应用当中,需要添加
            data.push(item)
            otherData.map((item,index) =>{
                item.sub.map((item,index) =>{
                    item.sub.map((item,index) =>{
                        if(item.id == selectId){
                            item.tag = true
                        }
                    })
                })
            })

        }

        // 重新赋值
        this.setState({
            myApplyData:data,
            otherApplyData:otherData
        })


    }

    /**
     *  去详情页面
     * */
    goDetailsAction = item => {
        alert('去详情')
    }

    render() {
        return (
            <View style={styles.container}>
                {/*我的应用条-编辑*/}
                <MyApplyEdit
                    applyEditData={this.state.myApplyData}
                    editAction={() => {
                        this.editAction()
                    }}
                />
                <ScrollView>
                    {/*我的应用*/}
                    <View style={{ marginTop: 10, backgroundColor: '#ffffff' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 10,
                            }}
                        >
                            <View
                                style={{
                                    marginLeft: 10,
                                    width: 8,
                                    height: 20,
                                    backgroundColor: 'blue',
                                }}
                            />
                            <Text style={{ marginLeft: 10, fontWeight: '700' }}>
                                我的应用
                            </Text>
                        </View>
                        <FlatList
                            data={this.state.myApplyData}
                            style={{ marginBottom: 20 }}
                            renderItem={item => this.renderMyApplyRow(item)}
                            keyExtractor={this.keyMyApplyExtractor}
                            numColumns={4}
                        />
                    </View>
                    {/*其他应用*/}
                    {this.state.otherApplyData.map((item, index) => (
                        <View key={index}>
                            {/*标题*/}
                            <View
                                style={{
                                    paddingTop: 10,
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 10,
                                }}
                            >
                                <View
                                    style={{
                                        marginLeft: 10,
                                        width: 8,
                                        height: 20,
                                        backgroundColor: 'blue',
                                    }}
                                />
                                <Text style={{ marginLeft: 10, fontWeight: '700' }}>
                                    {item.title}
                                </Text>
                            </View>
                            {/*主体内容*/}
                            <ScrollableTabView
                                style={{ backgroundColor: 'white' }}
                                tabBarActiveTextColor="#118EE9"
                                renderTabBar={() => <TabBar underlineColor="#118EE9" />}
                            >
                                {item.sub.map((item, index) => (
                                    <View key={index} tabLabel={{ label: item.subTitle }}>
                                        <ScrollView>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    height: 250,
                                                    flexWrap: 'wrap',
                                                }}
                                            >
                                                {item.sub.map((item, index) => (
                                                    <TouchableOpacity
                                                        key={index}
                                                        onPress={() => this.goDetailsAction(item)}
                                                    >
                                                        <View style={{ marginTop: 25 }}>
                                                            <Image
                                                                style={{
                                                                    width: 55,
                                                                    height: 55,
                                                                    marginLeft: (width - 55 * 4) / 8,
                                                                    marginRight: (width - 55 * 4) / 8,
                                                                }}
                                                                source={{ uri: item.icon }}
                                                            />
                                                            <Text
                                                                style={{
                                                                    alignSelf: 'center',
                                                                    marginTop: 15,
                                                                    marginBottom: 10,
                                                                }}
                                                            >
                                                                {item.name}
                                                            </Text>
                                                            <TouchableOpacity
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: -10,
                                                                    right: 10,
                                                                }}
                                                                onPress={() => this.otherAction(item)}
                                                            >
                                                                <Image
                                                                    source={
                                                                        item.tag ? require('./image/sub.png') : require('./image/add.png')
                                                                    }
                                                                    style={{
                                                                        opacity: this.state.startEdit ? 1 : 0,
                                                                        width: 15,
                                                                        height: 15,
                                                                    }}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </ScrollView>
                                    </View>
                                ))}
                            </ScrollableTabView>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }


    //-------------------------------我的应用start --------------------------------

    /**
     *  我的应用render
     * */
    renderMyApplyRow = item => (
        <TouchableOpacity onPress={() => this.goDetailsAction(item)}>
            <View style={{ marginTop: 25 }}>
                <Image
                    style={{
                        width: 55,
                        height: 55,
                        marginLeft: (width - 55 * 4) / 8,
                        marginRight: (width - 55 * 4) / 8,
                    }}
                    source={{ uri: item.item.icon }}
                />
                <Text style={{ alignSelf: 'center', marginTop: 15, marginBottom: 10 }}>
                    {item.item.name}
                </Text>
                <TouchableOpacity
                    style={{ position: 'absolute', top: -10, right: 10 }}
                    onPress={() => this.subAction(item)}
                >
                    <Image
                        source={require('./image/sub.png')}
                        style={{
                            opacity: this.state.startEdit ? 1 : 0,
                            width: 15,
                            height: 15,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )

    // 使用json中的key动态绑定key
    keyMyApplyExtractor = item => item.id

    //-------------------------------我的应用end --------------------------------

}


// 上方的编辑 我的应用框 UI
class MyApplyEdit extends React.Component {
    render() {
        const { applyEditData } = this.props
        return (
            <View
                style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                }}
            >
                <Text style={{ marginLeft: 10, fontWeight: '700' }}>我的应用</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    style={{ marginRight: 15 }}
                >
                    {applyEditData.map((item, index) => (
                        <Image
                            key={index}
                            style={{ width: 30, height: 30, marginLeft: 10 }}
                            source={{ uri: item.icon }}
                        />
                    ))}
                </ScrollView>
                <TouchableOpacity onPress={() => this.props.editAction()}>
                    <View
                        style={{
                            borderRadius: 4,
                            marginRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderWidth: 1,
                            borderColor: 'blue',
                        }}
                    >
                        <Text style={{ color: 'blue' }}>编辑</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 22,
        height: 22,
    },
})

