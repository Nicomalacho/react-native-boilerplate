import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.CONTAINER_PADDING,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleTextInput: {
    ...textInput
  },
  aboutUsWrapper: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  aboutUs: {
    fontWeight: theme.FONT_WEIGHT_BOLD
  },
  formLabel: {
    ...headingText,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'italic'
  },
});
