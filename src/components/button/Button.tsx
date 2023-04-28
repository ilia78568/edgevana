import React from "react"
import styles from './style.module.css'

interface IProps {
    title: string
    onClick: () => void
}

export const Button: React.FC<IProps> = ({ title, onClick }) => {
    return (
        <div className={styles.button} onClick={onClick}>{title}</div>
    )
}
