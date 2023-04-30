import React from "react"
import styles from './style.module.css'
import Image from "next/image"

interface IProps {
    svg: any
    title: string
    description: string
    onClick: () => void
    className?: string
    isActive?: boolean
}

export const Badge: React.FC<IProps> = ({svg, title, description, onClick, className, isActive}) => {
    return (
        <div className={styles.badge + ' ' + className + " " + (isActive ? styles.active : '')} onClick={onClick}>
            <div>
                <Image src={svg} alt="badge"></Image>
            </div>
            <div className={styles.badgeText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.descr}>{description}</div>
            </div>
        </div>
    )
}
