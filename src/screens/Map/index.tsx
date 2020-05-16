import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import rgba from "hex-to-rgba";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import { theme, mocks, mapStyles } from "../../constants";
import { Block, Badge } from "../../components";
import { styles as blockStyles } from "../../components/Block";

export default class MapScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    region={mocks.location}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapStyles}
                    style={styles.map}
                >
                    <Marker
                        rotation={-15}
                        anchor={{ x: 0.5, y: 0.5 }}
                        coordinate={{ latitude: 40.728399, longitude: -73.883771 }}
                    >
                        <Badge color={rgba(theme.colors.primary, "0.2")} size={77}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Badge color={rgba(theme.colors.primary, "0.2")} size={57}>
                                    <Icon
                                        size={57 / 2.5}
                                        name="location-arrow"
                                        color={theme.colors.primary}
                                    />
                                </Badge>
                            </TouchableOpacity>
                        </Badge>
                    </Marker>
                </MapView>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.mapMyLocation, blockStyles.shadow]}
                    onPress={() => alert("My Location")}
                >
                    <Block center middle shadow>
                        <Icon
                            size={16}
                            name="location-arrow"
                            color={theme.colors.primary}
                        />
                    </Block>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        flex: 1
    },
    mapMyLocation: {
        position: "absolute",
        borderRadius: 4,
        bottom: theme.sizes.base,
        left: theme.sizes.base,
        width: theme.sizes.base * 3,
        height: theme.sizes.base * 3,
        backgroundColor: theme.colors.white
    },
})
