const getters = {
  statusBarHeight: state => state.system.statusBarHeight,
  titleBarHeight: state => state.system.titleBarHeight,
  bodyBarHeight: state => {
    if (state.system.foldState) return state.system.titleBarHeight;
    return 100;
  },
  totalHeight: state => {
    if (state.system.foldState) {
      return state.system.statusBarHeight + state.system.titleBarHeight + 10
    }
    return state.system.statusBarHeight + state.system.titleBarHeight + 100 + 10
  },
  foldState: state => state.system.foldState,
  carsList: state => state.cars.carsList,
  totalPrice: state => {
    return state.cars.carsList.reduce((prev, next) => {
      return prev += next.price * next.numvalue
    }, 0)
  },
  buyNum: state => {
    return state.cars.carsList.reduce((prev, next) => {
      return prev += next.numvalue
    }, 0)
  }

}
export default getters;