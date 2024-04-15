import {useMMKVBoolean} from 'react-native-mmkv';
import {storage} from '../core/storage';

const IS_FIRST_TIME = 'IS_FIRST_TIME';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useMMKVBoolean(IS_FIRST_TIME, storage);
  if (isLoggedIn === undefined) {
    return [true, setIsLoggedIn];
  }
  return [isLoggedIn, setIsLoggedIn];
};