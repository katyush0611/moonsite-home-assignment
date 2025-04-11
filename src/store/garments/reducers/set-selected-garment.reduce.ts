import { GarmentsState } from "../garments.types";

const setSelectedGarment = (
  state: GarmentsState,
  action: any
): GarmentsState => {
  const { id, type } = action.payload;
  console.log(type, id);
  switch (type) {
    case "shirt":
      state.shirts.selected.push(id);
      //   return {
      //     ...state,
      //     shirts: {
      //       all: state.shirts.all,
      //       selected: [...state.shirts.selected, id],
      //     },
      //   };
      break;
    case "pants":
      state.pants.selected.push(id);
      //   return {
      //     ...state,
      //     pants: {
      //       all: state.pants.all,
      //       selected: [...state.pants.selected, id],
      //     },
      //   };
      break;
    case "shoes":
      state.shoes.selected.push(id);
      //   return {
      //     ...state,
      //     shoes: {
      //       all: state.shoes.all,
      //       selected: [...state.shoes.selected, id],
      //     },
      //   };
      break;
    default:
      return state;
  }
  return state;
};

export { setSelectedGarment };
