import React from "react";
import {
    BoxInput,
    Button,
    Container,
    IconSearch,
    InputText,
    IconSend,
} from "./styles";
import { InputType } from "../../types";

const Input: React.FC<InputType> = ({
    type,
    value,
    placeholder,
    onChangeText,
    onPress
}: InputType) => {

    const isSearchType = type === 'search';

    return (
        <Container>
            <BoxInput type={type}>
                {isSearchType ? (
                    <>
                        <IconSearch />
                        <InputText
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                        />
                    </>
                ) : (
                    <>
                        <InputText
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                        />
                        <Button onPress={onPress ? () => onPress(value) : undefined}>
                            <IconSend />
                        </Button>
                    </>
                )}
            </BoxInput>
        </Container>
    );
}

export default Input