import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
export type Category = {
  title: string;
  index: string;
  icon: string;
};

const allCatrgory = {title: 'All', index: '1'};

export const categories: Category[] = [
  {title: 'All', index: '1', icon: 'border-all'},
  {title: 'Work', index: '2', icon: 'format-list-bulleted'},
  {title: 'Personal', index: '3', icon: 'nature-people'},
  {title: 'Wishlist', index: '4', icon: 'wizard-hat'},
  {title: 'Birthdday', index: '5', icon: 'cake'},
  {title: 'Family', index: '6', icon: 'home'},
  {title: 'Friends', index: '7', icon: 'account-group'},
];

type State = {
  categories: Category[];
  addCategory: (category: Category) => void;
  resetAllCategory: () => void;
};

export const useStore = create<State>(
  persist(
    set => ({
      categories: [],
      addCategory: category =>
        set(state => ({categories: [...state.categories, category]})),
      resetAllCategory: () => set({categories: []}),
    }),
    {
      name: 'categories-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
