import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Loader } from '@/components/loader/Loader';

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
  }, [push]);

  return (
    <main className={styles.main}>
      <Loader />
    </main>
  )
}
