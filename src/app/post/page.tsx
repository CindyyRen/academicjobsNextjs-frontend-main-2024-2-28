'use client';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';

const Post = () => {
  const { data: session } = useSession();
  console.log(session?.user?.userRole);

  if (session && session.user?.userRole == 'EMPLOYER')
    return <h1>you are not allowed to visit this page</h1>;

  return <>welcome back, EMPLOYER!</>;
};

export default Post;
