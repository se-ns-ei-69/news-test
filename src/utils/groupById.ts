interface News {
  body: string,
  title: string,
  id: number,
  userId: number
}

export const groupById = (array: Array<News>): {[key: string]: News} => {
  return array.reduce((obj, value) => {
    // @ts-ignore
    obj[value.id] = value;
    return obj;
  }, {});
};
