import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';

// export default function NotFoundError(): void {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/');
//   });
// }
const Page404: NextPage = (): ReactElement => {
  return (
      <div>
        404!!!
      </div>
  );
};

export default Page404;