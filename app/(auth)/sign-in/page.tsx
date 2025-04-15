"use client"

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'

const Page = () => {
    return (
        <AuthForm
            type="SIGN_IN"
            schema={signInSchema}
            defaultValues={{
                email: '',
                password: '',
            }}

            onSubmit={async () => {
                return { success: true }; // Alapértelmezett visszatérési érték
            }}        />
    )
}

export default Page