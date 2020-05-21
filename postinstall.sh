#!/bin/bash
if [[ "$OSTYPE" == "darwin"* ]]; then
    SED_CMD="sed -i ''"
else
    SED_CMD="sed -i"
fi
$SED_CMD 's/import { Ionicons } from "@expo\vector-icons";/import { Ionicons } from "react-native-vector-icons\Ionicons";/' ./node_modules/expo-graphics/lib/ARRunningState.ios.js