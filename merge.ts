function  merge (int[] collection_1, int[] collection_2) : int [] {
  let mergeArr = [];
  let i = 0, j = 0;
  
  while(i < collection_1.length && j < collection_2.length) {
    if(collection_1[i] < collection_2[j])
      mergeArr.push(collection_1[i++]);
    else
      mergeArr.push(collection_2[j++]);
  }
  return mergeArr.concat(collection_1.slice(i)).concat(collection_2.slice(j));
}
