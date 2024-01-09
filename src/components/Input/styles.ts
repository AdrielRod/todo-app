import styled from "styled-components/native";
import { theme } from "../../theme/theme";
import { Platform } from "react-native";
import { 
    Ionicons, 
    MaterialIcons 
} from "@expo/vector-icons";

interface InputType {
    type: 'search' | 'send'
}

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: 70px;
    justify-content: left;
    align-self: center;
    align-items: center;
`


export const BoxInput = styled.View<InputType>`
    flex-direction: row;
    margin-left: 10px;
    width: 90%;
    height: 83%;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    ${({type}) => type == 'search' && 'margin-top: 20px'}
    ${({type}) => type == 'search' ? 'width: 95%' : 'width: 100%'}
    ${({type}) => type == 'search' ? 'padding-top: 0px;' : 'padding-top: 5px;'}
    ${Platform.OS === 'android' && 'elevation: 1; shadow-color: rgba(0, 0, 0, 0.12); shadow-radius: 10px'}
    ${Platform.OS === 'ios' &&
    `
        shadow-color: rgba(0, 0, 0, 0.13);
        shadow-offset: 0px 2px;
        shadow-opacity: 0.2;
        shadow-radius: 2px;
    `}
    
`

export const Button = styled.TouchableOpacity``

export const InputText = styled.TextInput`
    width: 80%;
    height: 75%;
    padding-left: 10px;
    font-weight: bold;
    opacity: 0.5;
`

export const IconSearch = styled(MaterialIcons).attrs(() => ({
    name: 'search',
    size: 35,
}))`
    color: ${theme.COLORS.BLACK_PRIMARY};
    opacity: 0.5;
`;

export const IconSend = styled(Ionicons).attrs(() => ({
    name: 'send',
    size: 30,
}))`
    color: ${theme.COLORS.BLUE};
`;

