import { PRODUCTS_API } from '@/utils/constants';
import apiClient from '../utils/apiClient';
import { error, info } from '../utils/logger';

export const getProductList = async (limit: number) => {
  try {
    info(`getProductList: Initiated product api`);
    const response = await apiClient({
      url: `${PRODUCTS_API}?_limit=${limit}`,
      method: 'GET'
    });
    return response?.data;
  } catch (err) {
    error(err);
    return null;
  }
};
