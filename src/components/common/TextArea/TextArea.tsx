import type { FC, ChangeEvent } from "react"

interface TextAreaProps {
       value: string;
       className?: string;
       onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({value, className, onChange }) => {
 return <textarea  className = {className} value = {value} onChange= {onChange} />
}
