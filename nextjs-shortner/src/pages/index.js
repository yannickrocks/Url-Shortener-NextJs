import React, { useContext, useEffect } from 'react';
import MyContext from '../lib/context';
import { useRouter } from 'next/router';
export default function Home() {
  const { isLoggedIn, user } = useContext(MyContext);
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [isLoggedIn]);
  return null;
}
