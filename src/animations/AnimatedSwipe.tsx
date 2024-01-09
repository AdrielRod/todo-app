import React, { 
    useRef, 
    FC } from 'react';
import { Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { theme } from '../theme/theme';
import {
    SwipeContentProps, 
    RenderRightActionProps 
} from '../types';
import { 
    StyledSwipeable,
    RightActionButton,
    RightActionContainer,
    RightActionsContainer,
 } from './AnimatedStyles';

const Swipe: FC<SwipeContentProps> = ({ children, onPress }) => {
    const swipeableRef = useRef<Swipeable>(null);

    const renderRightAction = ({ color, x, progress }: RenderRightActionProps) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        const pressHandler = () => {
            close();
            onPress();
        };

        return (
            <RightActionContainer style={{ transform: [{ translateX: trans }] }}>
                <RightActionButton onPress={pressHandler}>
                    <FontAwesome5 color={color} size={30} name="trash" />
                </RightActionButton>
            </RightActionContainer>
        );
    };

    const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => (
        <RightActionsContainer>
            {renderRightAction({ color: theme.COLORS.RED, x: 92, progress })}
        </RightActionsContainer>
    );

    const close = () => {
        swipeableRef.current?.close();
    };

    return (
        <StyledSwipeable
            ref={swipeableRef}
            friction={3}
            enableTrackpadTwoFingerGesture
            rightThreshold={40}
            renderRightActions={renderRightActions}
        >
            {children}
        </StyledSwipeable>
    );
};


export default Swipe;
