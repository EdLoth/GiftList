import { Coffee } from "../../contexts/CoffeesContext";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    COFFEE_ADD_TO_CART = 'COFFEE_ADD_TO_CART',
}

export function CoffeeAddToCartAction(Coffee: Coffee) {
    return {
        type: ActionTypes.COFFEE_ADD_TO_CART,
        payload: {
            Coffee
        }
    }
}
