export default {
  shuffle<T>(list: T[]) {
    console.log("shuffle list");
    const shuffled = list.slice().sort(() => 0.5 - Math.random());
    return shuffled;
  },
};
