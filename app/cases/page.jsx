'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

const Cases = () => {
    const router = useRouter();

  return (
    <button className='block bg-blue-100 p-2' onClick={() => router.replace('/')}>
        To the main page
    </button>
  )
}

export default Cases