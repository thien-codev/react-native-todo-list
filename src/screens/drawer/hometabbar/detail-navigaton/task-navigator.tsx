import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskDetail, {TaskDetailProps} from '../task-detail';
import Home from '../home';
import CreateCategory from '../create-category';

export type TaskStackParamList = {
  ['Home']: undefined;
  ['TaskDetail']: TaskDetailProps;
};
const Stack = createNativeStackNavigator<TaskStackParamList>();
const TaskNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TaskDetail" component={TaskDetail}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategory}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default TaskNavigator;
