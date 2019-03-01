export const ArrayUtils = {
  sortDesc: (array, sortBy) => {
    const sorted = array.sort((a, b) => {
      return b[sortBy] - a[sortBy];
    });
    return sorted;
  },
  sortAsc: (array, sortBy) => {
    const sorted = array.sort((a, b) => {
      return a[sortBy] - b[sortBy];
    });
    return sorted;
  }
};

export default {
  ArrayUtils
};
