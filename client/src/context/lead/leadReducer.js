import { POST_LEAD } from "../types";

export default (state, action) => {
 switch (action.type) {
  case POST_LEAD:
   return {
    ...state,
    lead: action.payload,
   };
 }
};
