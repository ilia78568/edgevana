import React from "react"
import styles from './style.module.css'

interface IProps {
    title: string
    onClick: (e:any) => void
    className?: string
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

export const Button: React.FC<IProps> = ({ title, onClick, className, type, disabled }) => {
    return (
        <button type={type} className={styles.button + ' ' + className + ' ' + (disabled ? styles.disabled : '')} onClick={onClick} disabled={disabled}>{title}</button>
    )
}
