import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import CategoryItem from './category-item';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddTaskSheet = ({categories}: {categories: Category[]}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const buttonRef = useRef(null);
  const handleCategoryPress = () => {
    setModalVisible(true);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderItem = ({item, index}: {item: Category; index: string}) => (
    <TouchableOpacity
      key={`category-${index}`}
      onPress={() => {
        setModalVisible(false);
        setSelectedCategory(item);
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <MaterialCommunityIcons name={item.icon} size={24} color="black" />
        <Text style={{marginVertical: 10, fontWeight: '500'}}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalView}>
                <FlatList
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  data={categories}
                  renderItem={({
                    item,
                    index,
                  }: {
                    item: Category;
                    index: number;
                  }) => renderItem({item, index: index.toString()})}
                  keyExtractor={item => item.index}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TextInput
        autoFocus={true}
        placeholder="Enter task title"
        placeholderTextColor={'lightgrey'}></TextInput>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          ref={buttonRef}
          style={[styles.button, {backgroundColor: 'lightblue'}]}
          onPress={handleCategoryPress}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              marginHorizontal: 10,
            }}>
            {selectedCategory && (
              <MaterialCommunityIcons
                name={selectedCategory.icon}
                size={24}
                color="black"
              />
            )}
            <Text style={{fontWeight: '500'}}>
              {selectedCategory?.title || 'Category'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color="black"
          />
          <Text>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
          <Text>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'lightblue', padding: 10}]}>
          <MaterialCommunityIcons name="check" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
  },
  input: {
    height: 40,
    margin: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    margin: 110,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddTaskSheet;
