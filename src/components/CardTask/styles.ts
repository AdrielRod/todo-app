import styled from "styled-components/native";
import { Platform } from "react-native";
import Checkbox from "expo-checkbox";

interface NameProps {
    isFinished: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: 70px;
    justify-content: left;
    align-self: center;
    align-items: center;
`

export const BoxItem = styled.View`
    flex-direction: row;
    margin-left: 10px;
    width: 95%;
    height: 90%;
    align-items: center;
    border-radius: 8px;
    background-color: white;
    ${Platform.OS === 'android' && 'elevation: 7; shadow-color: rgba(0, 0, 0, 0.30);'}
    ${Platform.OS === 'ios' &&
    `
        shadow-color: rgba(0, 0, 0, 0.13);
        shadow-offset: 0px 2px;
        shadow-opacity: 0.2;
        shadow-radius: 2px;
    `}
`

export const ButonCheck = styled(Checkbox)`
    margin: 20px;
`

export const Name = styled.Text<NameProps>`
    color: rgba(0, 0, 0, 0.50);
    font-size: 16px;
    font-style: normal;
    max-width: 80%;
    font-weight: 500;
    text-decoration: ${({isFinished}) => isFinished ? 'line-through' : 'none'};
    
`

