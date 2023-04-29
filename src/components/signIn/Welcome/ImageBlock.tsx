import GeneralImage from '@/assets/images/signUp/generalInfo.png'
import ChatsImage from '@/assets/images/signUp/Chats.png'
import ArrowSvg from '@/assets/images/signUp/arrow.svg'

import styles from './ImageBlock.module.css'

export const ImageBlock = () => {
    return (
        <div className={styles.mainRight}>
          <div className={styles.imagesBlock}>
            <img src={GeneralImage.src} className={styles.mainRight__img1} />
            <img src={ChatsImage.src} className={styles.mainRight__img2}/>
          </div>
          <div className={styles.acceleratingText}>
            <div>
              <div className={styles.acceleratingText__text}>
                <div> Accelerating the next generation of the internet</div>
                <div>Participate in over 100+ protocols with one click | Zero to operator in 60 seconds</div>
              </div>
              <div className={styles.acceleratingText__arrows}>
                <div>
                  <img src={ArrowSvg.src} className={styles.firstArrow}/>
                </div>
                <div>
                  <img src={ArrowSvg.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}