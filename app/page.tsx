// 'use client';

// import Navbar from "@/components/NavBar";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>Welcome To Sprout</div>
      <Link href="/dashboard">Go to dahboard</Link>
      <Link href="/login">Go to login</Link>
    </>
  );
}
