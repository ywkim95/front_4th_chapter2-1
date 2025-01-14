import { getStockStatusMessage } from './lib.js';
import { isLowStock } from '../../entities/stock/lib.js';

const formatItemStockDisplay = (item) =>
  `${item.name}: ${getStockStatusMessage(item)}\n`;

export const updateStockInformation = (prodList) =>
  prodList.filter(isLowStock).map(formatItemStockDisplay).join('');
