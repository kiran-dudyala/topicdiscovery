export const ArrayChunk = (payload, size) => {
    var result = payload?.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / size);
  
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
  
      resultArray[chunkIndex].push(item);
  
      return resultArray;
    }, []);
    return result;
  };
  