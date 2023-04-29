import LogoSvg from '@/assets/images/signUp/logo.svg'

import styles from '@/styles/SignUp.module.css'
import { Welcome } from "@/components/signIn/Welcome/Welcome";
import { Sign } from "@/components/signIn/Sign/Sign";
import { ImageBlock } from "@/components/signIn/Welcome/ImageBlock";
import { ImageBlockSign } from "@/components/signIn/Sign/ImageBlockSign";
import { useState } from "react";

export default function SignUp() {
    
  const [isSign, setIsSign] = useState(true)

  return (
    <div className={styles.main}>
      <div className={styles.mainLeft}>
        <div className={styles.logoBlock}>
          <img className={styles.logo} src={LogoSvg.src}/>
        </div>
        {isSign ? <Sign/> :  <Welcome getStarted={() => setIsSign(true)}/>}
        <div className={styles.footer}>© Edegvana 2022</div>
      </div>
      {isSign ? <ImageBlockSign /> :  <ImageBlock />}
    </div>
    )
  }