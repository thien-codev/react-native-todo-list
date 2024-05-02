import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconNames} from '../assets/list-category-icons';

const AddCategorySheet = ({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: () => void;
}) => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(iconNames[0]);

  const handleCloseAddCategory = () => {
    // Logic to add the category
    console.log(`Adding category: ${categoryTitle} with icon: ${selectedIcon}`);
    onClose();
  };

  const handleCreateCategory = () => {
    onClose();
  };

  const renderIcon = ({item}) => (
    <TouchableWithoutFeedback onPress={() => setSelectedIcon(item)}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item} size={20} color="lightgray" />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleCloseAddCategory}>
          <MaterialCommunityIcons name="close" size={22} color="lightgray" />
        </TouchableOpacity>
        <Text style={styles.title}>Create New Category</Text>

        <TouchableOpacity onPress={handleCreateCategory}>
          <MaterialCommunityIcons name="check" size={22} color="blue" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Please input category"
        value={categoryTitle}
        onChangeText={setCategoryTitle}
      />
      <FlatList
        data={iconNames}
        renderItem={renderIcon}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 6,
    padding: 8,
    borderBlockColor: 'lightgray',
    borderLeftColor: 'lightgray',
    borderRightColor: 'lightgray',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AddCategorySheet;
