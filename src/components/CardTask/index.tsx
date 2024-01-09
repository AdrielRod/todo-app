import React, { useState } from "react";
import { 
    BoxItem, 
    ButonCheck, 
    Container, 
    Name 
} from "./styles";
import { theme } from "../../theme/theme";
import Swipe from "../../animations/AnimatedSwipe";
import { DataType } from "../../types";
import { deleteTask, updateStatusTask } from "../../function/tasks";


const CardTask: React.FC<DataType> = ({ data, updateTasks }) => {
    const [isChecked, setChecked] = useState(data.finished);

    const changeValue = async () => {
        if(isChecked && data.finished ){
            await updateStatusTask(false, data.key)
            updateTasks()
            setChecked(!isChecked)
        }else if(!isChecked && !data.finished){
            await updateStatusTask(true, data.key)
            updateTasks()
            setChecked(!isChecked)
        }
    }

    const handleDeleteItem = (key: string) => {
        deleteTask(key).then(() => {
            updateTasks()
        })
        
    }

    return (
        <Swipe onPress={() => handleDeleteItem(data.key)}>
            <Container>
                <BoxItem>
                    <ButonCheck
                        color={isChecked ? theme.COLORS.GREEN : theme.COLORS.GRAY}
                        value={isChecked}
                        onValueChange={changeValue}
                    />
                    <Name 
                        isFinished={data.finished}
                        numberOfLines={1}
                    >{data.name}</Name>
                </BoxItem>
            </Container>
        </Swipe>
    )
}

export default CardTask