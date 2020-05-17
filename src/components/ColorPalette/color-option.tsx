import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window');

const ColorOption = (props) => {
  const { icon, color, isSelected, scaleToWindow, onColorChange } = props;
  let scaledWidth = width * .025;
  return (
    <TouchableOpacity
      onPress={() => onColorChange(color)}
      style={[
        styles.colorOption,
        { backgroundColor: color },
        scaleToWindow && {
          width: width * .08,
          height: width * .08,
          marginHorizontal: scaledWidth,
          marginVertical: scaledWidth,
          borderRadius: scaledWidth * 2
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  colorOption: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15
  }
});

ColorOption.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  scaleToWindow: PropTypes.bool.isRequired,
  onColorChange: PropTypes.func.isRequired,
}

export default ColorOption;