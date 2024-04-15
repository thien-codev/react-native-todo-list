import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {Task} from '../../../types/task';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import TaskNavigator from './detail-navigaton/task-navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';

export type TaskDetailProps = {
  task: Task;
};
const TaskDetail = ({
  route,
}: {
  route: NativeStackScreenProps<TaskDetailProps>;
}) => {
  const navigation = useNavigation();
  const task = route.params.task;

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigation.goBack}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={'#003f5c'}
            size={34}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>No category</Text>
          <TouchableOpacity onPress={navigation.goBack}>
            <MaterialCommunityIcons
              name="menu-down"
              color={'darkgrey'}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-horizontal"
            color={'#003f5c'}
            size={26}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.taskContent}>
          <Text style={{fontWeight: '500', fontSize: 20, color: '#003f5c'}}>
            {task.title}
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="plus" color={'#0680ff'} size={14} />
            <Text style={{fontWeight: '400', fontSize: 14, color: '#0680ff'}}>
              Add Sub-task
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.schedule}>
          <ScheduleItem type={ScheduleType.date}></ScheduleItem>
          <ScheduleItem type={ScheduleType.time}></ScheduleItem>
          <ScheduleItem type={ScheduleType.reminder}></ScheduleItem>
          <ScheduleItem type={ScheduleType.repeat}></ScheduleItem>
        </View>

        <View style={styles.schedule}>
          <ToolItem icon="file-document-outline" title="Notes"></ToolItem>
          <ToolItem icon="attachment" title="Attachment"></ToolItem>
        </View>
      </ScrollView>
    </View>
  );
};

enum ScheduleType {
  date = 'Due Date',
  time = 'Time',
  reminder = 'Reminder at',
  repeat = 'Repeat',
}

const scheduleIcon: string = ({type}: {type: ScheduleType}) => {
  switch (type) {
    case ScheduleType.date:
      return 'calendar-month-outline';
    case ScheduleType.time:
      return 'alarm';
    case ScheduleType.reminder:
      return 'bell-outline';
    case ScheduleType.repeat:
      return 'repeat-variant';
  }
};

const ScheduleItem = ({type}: ScheduleType) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <MaterialCommunityIcons
          name={scheduleIcon({type})}
          color={'#003f5c'}
          size={22}
        />
        <Text style={{color: '#003f5c'}}>{type}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Text style={{color: '#003f5c', fontSize: 14, fontWeight: '400'}}>
          2024/04/15
        </Text>
        <MaterialCommunityIcons
          name="chevron-right"
          color={'lightgrey'}
          size={22}
        />
      </View>
    </TouchableOpacity>
  );
};

const ToolItem = ({icon, title}: {icon: string; title: string}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <MaterialCommunityIcons name={icon} color={'#003f5c'} size={22} />
        <Text style={{color: '#003f5c'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'darkgrey',
  },
  topBar: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 60,
    left: 20,
    right: 20,
  },
  scrollView: {
    flex: 1,
    top: 100,
    width: '100%',
  },
  taskContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#eaedf0',
    gap: 100,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
  },
  schedule: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#eaedf0',
  },
});

export default TaskDetail;
