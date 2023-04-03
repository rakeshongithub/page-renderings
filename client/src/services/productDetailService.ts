import { PRODUCTS_API } from '@/utils/constants';
import apiClient from '../utils/apiClient';
import { error, info } from '../utils/logger';

export const getProductDetail = async (id: string) => {
  try {
    info(`getProductList: Initiated fetching product detail`);
    const response = await apiClient({
      url: `${PRODUCTS_API}/${id}`,
      method: 'GET'
    });
    return response?.data;
  } catch (err) {
    error(err);
    return null;
  }
};
