import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStore} from '../../../types/category';
import uuid from 'react-native-uuid';
import {Category} from '../../../types/category';
import AddCategorySheet from '../../../components/add-category-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import { iconNames } from '../../../assets/list-category-icons';

const CreateCategory = ({navigation}) => {
  const categories = useStore(state => state.categories);
  const addCategory = useStore(state => state.addCategory);
  const resetAllCategory = useStore(state => state.resetAllCategory);
  const [newCategoryTitle, setNewCategoryTitle] = useState('');

  const refRBSheet = useRef();

  const handleAddCategory = () => {
    const randomIndex = Math.floor(Math.random() * iconNames.length);
    const newCategory = {
      title: newCategoryTitle,
      index: uuid.v4().toString(),
      icon: iconNames[randomIndex],
    };

    addCategory(newCategory);
    setNewCategoryTitle('');
  };

  const openAddCategory = () => {
    refRBSheet.current.open();
  };

  const handleResetCategory = () => {
    resetAllCategory();
  };

  const renderItem = ({item, index}: {item: Category; index: string}) => (
    <View
      key={`category-${index}`}
      style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <MaterialCommunityIcons name={item.icon} size={24} color="black" />
      <Text style={{marginVertical: 10, fontWeight: '500'}}>{item.title}</Text>
    </View>
  );

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

        <Text style={styles.title}>Manage Category</Text>

        <FlatList
          data={categories}
          keyExtractor={item => item.index}
          renderItem={renderItem}
        />
        <Button title="Add category" onPress={openAddCategory}></Button>
        <Button title="Reset category" onPress={handleResetCategory}></Button>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={440}
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
        <AddCategorySheet
          onClose={() => refRBSheet.current.close()}
          onCreate={() => refRBSheet.current.close()}></AddCategorySheet>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#003f5c',
    alignSelf: 'center',
    bottom: 26,
  },
  topBar: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
  },
});

export default CreateCategory;
