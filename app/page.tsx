'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  if (!isFirstVisit) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-black"
        onClick={() => setIsFirstVisit(true)}
      >
        <Image src="/assets/0800_white.png" alt="logo" width={160} height={56} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-gray-100">
      <Image src="/assets/0800_black.png" alt="logo" width={104} height={36} />
    </div>
  );
}
