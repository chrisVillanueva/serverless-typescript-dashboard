import React, { useState } from "react"
import { useFocus } from "./utils/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"


interface NewItemFormProps {
    onAdd(text: string): void
}
    
export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("") //local controlled input
    const inputRef = useFocus() //set focus

    return (
        <NewItemFormContainer>
            <NewItemInput 
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)} //no type for event
            />
                <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}
    