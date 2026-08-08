import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image src={"/logo.svg"} alt='Forge Logo' height={80} width={80} className='mb-4' priority />
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome to FORGE</h1>
        <p className="text-sm text-zinc-400">Sign in to your training workspace</p>
      </div>
      <SignInFormClient/>
    </div>
  )
}

export default Page