import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { theme } from '../theme/theme';

export const StyledSwipeable = styled(Swipeable)``;

export const RightActionsContainer = styled.View`
  width: 92px;
  flex-direction: row;

`;

export const RightActionContainer = styled(Animated.View)`
  width: 70px;
  
  align-self: center;
`;

export const RightActionButton = styled(TouchableOpacity)`
    background-color: ${theme.COLORS.PINK};
    border-radius: 8px;
    height: 68px;
    justify-content: center;
    align-items: center;
`;