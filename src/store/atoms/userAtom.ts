import { atom } from 'recoil';
import { STORE_KEYS } from '../keys';

interface Icredentials {
  token?: string;
}

const credentials: Icredentials = {};

export const userAtom = atom({
  key: STORE_KEYS.USER_ATOM,
  default: credentials
});
