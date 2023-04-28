import { Badge } from "@/components/badge/Badge";
import { Button } from "@/components/button/Button";

import IndividualSvg from '@/assets/images/signUp/ind.svg'
import BusinessSvg from '@/assets/images/signUp/business.svg'
import LogoSvg from '@/assets/images/signUp/logo.svg'
import ArrowSvg from '@/assets/images/signUp/arrow.svg'
import GeneralImage from '@/assets/images/signUp/generalInfo.png'
import ChatsImage from '@/assets/images/signUp/Chats.png'

import styles from '@/styles/SignUp.module.css'
import { Welcome } from "@/components/signIn/Welcome";
import { Sign } from "@/components/signIn/Sign";

export default function SignUp() {
    
  return (
      <>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.logoBlock}>
            <img className={styles.logo} src={LogoSvg.src}/>
          </div>
          {/* <Welcome /> */}
          <Sign />
          <div className={styles.footer}>© Edegvana 2022</div>
        </div>

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
      </div>
      
      
      </>
    )
  }