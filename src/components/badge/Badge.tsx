import React from "react"
import styles from './style.module.css'

interface IProps {
    svg: any
    title: string
    description: string
    onClick: () => void
}

export const Badge: React.FC<IProps> = ({svg, title, description, onClick}) => {
    return (
        <div className={styles.badge} onClick={onClick}>
            <div>
                <img src={svg?.src}></img>
            </div>
            <div className={styles.badgeText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.descr}>{description}</div>
            </div>
        </div>
    )
}
