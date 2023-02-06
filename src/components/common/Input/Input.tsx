import type { FC, ChangeEvent } from "react"

interface InputProps {
       value:string;
       onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
       className?: string;

}

export const Input: FC<InputProps> = ({value, onChange, className}) => <input className = {className} value = {value} onChange = {onChange}/>
