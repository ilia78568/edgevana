import Link from 'next/link'

import GeneralImage from '@/assets/images/signUp/Incentives.png'
import ChatsImage from '@/assets/images/signUp/Mobile.png'

import styles from './ImageBlockSign.module.css'
import Image from 'next/image'

export const ImageBlockSign = () => {
    return (
        <div className={styles.mainRight}>
          <h2 className={styles.header}>Earn free crypto after making your first purchase.</h2>
          <p className={styles.headerLink}>*The average Edgevana operator earns $950 a month in incentives.<Link className={styles.linkRules} href='/'>See terms</Link></p>
          <div className={styles.imagesBlock}>
            <Image src={GeneralImage} className={styles.mainRightImg1} alt='desktop' />
            <Image src={ChatsImage} className={styles.mainRightImg2} alt='chats'/>
          </div>
        </div>
    )
}