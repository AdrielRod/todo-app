import styled from "styled-components/native";
import { theme } from '../theme/theme';
import { Ionicons } from "@expo/vector-icons";

interface TextType {
  type: 'primary' | 'secondary';
}

interface ModalContentType {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 30px;
  align-items: center;
  background-color: ${theme.COLORS.WHITE};
`;

export const Logo = styled.Image`
  width: 57.034px;
  height: 54px;
  margin-top: 10%;
`;

export const Text = styled.Text<TextType>`
  color: ${({ type }) => (type === 'primary' ? theme.COLORS.BLACK_PRIMARY : theme.COLORS.BLACK_SECONDARY)};
  font-size: ${({ type }) => (type === 'primary' ? '18px' : '20px')};
  font-style: normal;
  font-weight: bold;
  align-self: ${({ type }) => (type === 'primary' ? 'flex-start' : 'center')};
  ${({ type }) => type === 'primary' && 'margin-left: 20px'}
  margin-top: 20px;
`;

export const SubText = styled.Text`
  color: ${theme.COLORS.GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
`;

export const FabButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.COLORS.BLUE};
  position: absolute;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Modal = styled.Modal``;
export const FlatList = styled.FlatList``;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.30);
`;

export const ModalContent = styled.View<ModalContentType>`
  height: ${({ isActive }) => (isActive ? '55%' : '35%')};
  background-color: ${theme.COLORS.WHITE};
  align-items: center;
  padding: 16px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  overflow: hidden;
`;

export const ModalOutside = styled.View<ModalContentType>`
  height: ${({ isActive }) => (isActive ? '45%' : '65%')};
`;

export const ModalBackArea = styled.TouchableOpacity`
  height: 100%;
`;

export const IconAdd = styled(Ionicons).attrs(() => ({
  name: 'add',
  size: 30,
}))`
  color: ${theme.COLORS.WHITE};
`;
