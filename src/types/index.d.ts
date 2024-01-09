export interface SwipeContentProps {
    onPress: () => void;
    index?: number;
    item?: {
      memberName?: string;
      createdAt?: Date;
    };
    children?: ReactNode;
  }

export interface TaskTypes {
  name: string;
  finished: boolean;
  key: string;
}

export type RenderRightActionProps = {
  color: string;
  x: number;
  progress: Animated.AnimatedInterpolation<number>;
};

export interface DataType {
  data: TaskTypes
  updateTasks: () => void
}

export interface InputType {
  type: 'search' | 'send';
  value: string;
  placeholder: string;
  onChangeText: (item: string) => void;
  onPress?: (text: string) => void;
}