import React from "react"
import {AddNewItem} from "./AddNewItem"
import { ColumnContainer, ColumnTitle } from "./styles"

//interface for props object
interface ColumnProps {
    text: string //required value..add ':?' to make optional
}

export const Column = ({
        text,
        children 
    }: React.PropsWithChildren<ColumnProps>
) => {
    return (
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
        <AddNewItem
            toggleButtonText="+ Add another task"
            onAdd={console.log}
            dark
        />
    
    </ColumnContainer>
    )
}

