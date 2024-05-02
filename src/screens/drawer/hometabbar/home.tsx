import React, {useRef, useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SectionList,
  LayoutAnimation,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  KeyboardEventListener,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryItem from '../../../components/category-item';
import {categories} from '../../../types/category';
import {defaultTaskList} from '../../../types/task';
import TaskItem from '../../../components/task-item';
import Empty from '../../../components/empty';
import RBSheet from 'react-native-raw-bottom-sheet';
import AddTaskSheet from '../../../components/add-task-sheet';

enum TaskTime {
  today = 'Today',
  previous = 'Previous',
  future = 'Future',
}

const Home = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState("1");
  const [isExpanded, setIsExpanded] = useState(true);
  const refRBSheet = useRef();

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

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.push('CreateCategory');
          }}>
          <View style={styles.createCategory}>
            <MaterialCommunityIcons name="plus" color={'white'} size={26} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {defaultTaskList.filter(item => item.categoryId === selectedIndex)
        .length === 0 ? (
        <View style={{marginTop: 160, marginHorizontal: 16}}>
          <Empty></Empty>
        </View>
      ) : (
        <View style={styles.taskList}>
          <SectionList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            sections={[
              {
                title: TaskTime.today,
                data: defaultTaskList.filter(
                  item => item.categoryId === selectedIndex,
                ),
              },
              {
                title: TaskTime.previous,
                data: defaultTaskList.filter(
                  item => item.categoryId === selectedIndex,
                ),
              },
              {
                title: TaskTime.future,
                data: defaultTaskList.filter(
                  item => item.categoryId === selectedIndex,
                ),
              },
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
      )}

      {/* create task */}
      <TouchableWithoutFeedback onPress={() => (refRBSheet.current as any)?.open()}>
        <View style={styles.createTask}>
          <MaterialCommunityIcons name="plus" color={'white'} size={26} />
        </View>
      </TouchableWithoutFeedback>

      <RBSheet
        ref={refRBSheet}
        height={360}
        openDuration={300}
        closeDuration={300}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            backgroundColor: '#AAA',
          },
        }}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
          <AddTaskSheet categories={categories}></AddTaskSheet>
      </RBSheet>
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
    top: 40,
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
