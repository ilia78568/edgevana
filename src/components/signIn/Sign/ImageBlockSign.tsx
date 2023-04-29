import GeneralImage from '@/assets/images/signUp/Incentives.png'
import ChatsImage from '@/assets/images/signUp/Mobile.png'
import ArrowSvg from '@/assets/images/signUp/arrow.svg'
import styles from './ImageBlockSign.module.css'


export const ImageBlockSign = () => {
    return (
        <div className={styles.mainRight}>
          <h2 className={styles.header}>Earn free crypto after making your first purchase.</h2>
          <p className={styles.header__link}>*The average Edgevana operator earns $950 a month in incentives.<a href='/'>See terms</a></p>

          <div className={styles.imagesBlock}>
            <img src={GeneralImage.src} className={styles.mainRight__img1} />
            <img src={ChatsImage.src} className={styles.mainRight__img2}/>
          </div>
        </div>
    )
}