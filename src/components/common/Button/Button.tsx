import type { FC, PropsWithChildren } from "react";

interface ButtonProps {
       onClick: () => void;
       disabled?: boolean;
       className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({children, onClick, disabled, className}) => 
       <button className = {className} onClick = {onClick} disabled = {disabled}>{children}</button>

