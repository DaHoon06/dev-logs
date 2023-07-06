import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFoundError(): void {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });
}
