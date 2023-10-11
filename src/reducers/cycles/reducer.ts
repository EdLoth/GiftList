import { produce } from "immer";
import { ActionTypes } from "./actions";



// export function coffesReducer(state: CyclesState, action: any) {

//     switch (action.type) {
//         case ActionTypes.ADD_COFFE_TO_CART:
//             return produce(state, (draft) => {
//                 draft.cycles.push(action.payload.newCycle)
//                 draft.activeCycleId = action.payload.newCycle.id
//             })

//         default:
//             return state

//     }
// }