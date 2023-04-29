import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from '@/styles/Home.module.css'

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const item = localStorage.getItem('login')
    if(item) {
      push('/tool-kit');
    } else {
      push('/sign-up');
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.ldsRipple}><div></div><div></div></div>
    </main>
  )
}
