import Image from 'next/image'

import GeneralImage from '@/assets/images/signUp/generalInfo.png'
import ChatsImage from '@/assets/images/signUp/Chats.png'
import ArrowSvg from '@/assets/images/signUp/arrow.svg'

import styles from './ImageBlock.module.css'

export const ImageBlock = () => {
  return (
    <div className={styles.mainRight}>
      <div className={styles.imagesBlock}>
        <Image src={GeneralImage} className={styles.mainRightImg1} alt='desktop' />
        <Image src={ChatsImage} className={styles.mainRightImg2} alt='mobile' />
      </div>
      <div className={styles.acceleratingText}>
        <div>
          <div className={styles.acceleratingTextText}>
            <div> Accelerating the next generation of the internet</div>
            <div>Participate in over 100+ protocols with one click | Zero to operator in 60 seconds</div>
          </div>
          <div className={styles.acceleratingTextArrows}>
            <div>
              <Image src={ArrowSvg} className={styles.firstArrow} alt='arrow left' />
            </div>
            <div>
              <Image src={ArrowSvg} alt='arrow right' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}