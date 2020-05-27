import * as React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={styles.scene}>
        <Image source={require('../../assets/img/view1_bg.png')} style={{ flex: 1, width: "100%", height: "100%" }} />
    </View>
);

const SecondRoute = () => (
    <View style={styles.scene}>
        <Text>View 2</Text>
    </View>
);

const ThirdRoute = () => (
    <View style={styles.scene}>
        <Text>View 3</Text>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Home() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Eyeglasses' },
        { key: 'second', title: 'Sunglasses' },
        { key: 'third', title: 'Contacts' }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    renderLabel = ({ route, focused, color }) => {

        return (
            <Text
                style={[
                    styles.title,
                    focused && styles.titleFocused,
                ]}
            // adjustsFontSizeToFit
            // numberOfLines={1}
            >
                {route.title}
            </Text>
        )
    }

    renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={styles.transparent}
            renderLabel={this.renderLabel}
            tabStyle={styles.tabStyle}
            style={styles.transparent}
            indicatorStyle={{ backgroundColor: '#00a2e1', height: 2.5, marginLeft: 30, width: 100 }}
            scrollEnabled
        />
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E4E8ED' }}>
            <TabView
                initialLayout={initialLayout}
                renderTabBar={this.renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                navigationState={{ index, routes }}
                swipeEnabled={false}
                lazy
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#fff',
        flex: 1,
        color: '#1A2435',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        paddingTop: 30,
        flex: 1,
        color: '#1A2435',
    },
    transparent: {
        backgroundColor: "#E4E8ED"
    },
    content: {
        // justifyContent: 'center',
        // flex: 1,
    },
    tabStyle: {
        width: 'auto',
        marginLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,

    },
    title: {
        color: '#bfbfbf',
        fontSize: 15,
        textAlign: 'left'
    },
    titleFocused: {
        // color: '#1A2435',
        color: '#232323',
    },
});