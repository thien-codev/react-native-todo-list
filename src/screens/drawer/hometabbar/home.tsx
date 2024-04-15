import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SectionList,
  LayoutAnimation,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryItem from '../../../components/category-item';
import {categories} from '../../../types/category';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {defaultTaskList} from '../../../types/task';
import TaskItem from '../../../components/task-item';

enum TaskTime {
  today = 'Today',
  previous = 'Previous',
  future = 'Future',
}

const Home = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  const collapse = () => {
    LayoutAnimation.easeInEaseOut();
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <MaterialCommunityIcons name="menu" color={'#003f5c'} size={30} />
        </TouchableOpacity>

        <View style={styles.rightButtons}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="magnify"
              color={'#003f5c'}
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={'#003f5c'}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* category */}
      <View style={styles.categoryBar}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map(item => (
            <CategoryItem
              key={item.index}
              title={item.title}
              selected={item.index === selectedIndex}
              onPress={() => setSelectedIndex(item.index)}
            />
          ))}
        </ScrollView>

        <TouchableWithoutFeedback>
          <View style={styles.createCategory}>
            <MaterialCommunityIcons name="plus" color={'white'} size={26} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* list of tasks */}
      <View style={styles.taskList}>
        <SectionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          sections={[
            {title: TaskTime.today, data: defaultTaskList},
            {title: TaskTime.previous, data: defaultTaskList},
            {title: TaskTime.future, data: defaultTaskList},
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) =>
            isExpanded && (
              <TaskItem
                item={item}
                onPress={() => {
                  navigation.push('TaskDetail', {task: item});
                }}
              />
            )
          }
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
              {!isExpanded && (
                <Text
                  style={{marginTop: 5, color: '#8699aa', fontWeight: '600'}}>
                  {' (' + section.data.length + ')'}
                </Text>
              )}
              <TouchableOpacity onPress={collapse}>
                <MaterialCommunityIcons
                  style={{marginTop: 5}}
                  name={isExpanded ? 'chevron-down' : 'chevron-up'}
                  color={'#8699aa'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* create task */}
      <TouchableWithoutFeedback>
        <View style={styles.createTask}>
          <MaterialCommunityIcons name="plus" color={'white'} size={26} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
  },
  rightButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  categoryBar: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 100,
    left: 20,
    right: 20,
  },
  createTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003f5c',
    borderRadius: 30,
    bottom: 20,
    right: 20,
  },
  createCategory: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003f5c',
    borderRadius: 20,
    marginLeft: 6,
  },
  taskList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 160,
    marginHorizontal: 16,
  },
  sectionHeaderTitle: {
    fontWeight: '500',
    color: '#8699aa',
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 30,
  },
});

export default Home;
