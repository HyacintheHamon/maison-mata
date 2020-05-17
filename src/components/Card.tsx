import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Block from "./Block";
import { theme } from "../constants";

const { height, width } = Dimensions.get("window");

const ratio = 228 / 362;
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = CARD_WIDTH * ratio;

export default class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
    width: CARD_WIDTH,
    height: CARD_HEIGHT
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 13
  }
});
