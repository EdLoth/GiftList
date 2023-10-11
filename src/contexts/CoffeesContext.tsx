import { createContext, useState, ReactNode } from "react";

export interface Coffee {
    quantity: number;
    id: number;
    title: string;
    description: string;
    uri: string;
    value: number;
    tagIds: number[];
}

interface CoffesContextType {
    cart: Coffee[] | null;
    AddToCart: (coffees: Coffee[]) => void;
}

interface CoffeeContextProviderProps {
    children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffesContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    
    const [cart, setCart] = useState<Coffee[]>([]);
    console.log(cart)
    const AddToCart = (coffees: Coffee[]) => {
        setCart([...cart, ...coffees]);
    };

    return (
        <CoffeeContext.Provider
            value={{
                AddToCart,
                cart
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}