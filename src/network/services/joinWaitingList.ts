import axios from 'axios';
import { JOIN_WAITING_LIST } from '../config/endpoints';

export const joinWaitingList = async (email: string) => {
  const endpoint = `${process.env.REACT_APP_BASE_URL + JOIN_WAITING_LIST}`;

  return await axios.post(endpoint, { email });
};
