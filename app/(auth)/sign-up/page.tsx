"use client"

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'

const Page = () => {
    return (
        <AuthForm
            type="SIGN_UP"
            schema={signUpSchema}
            defaultValues={{
                email: '',
                password: '',
                fullName: '',
                universityId: 0,
                universityCard: '',
            }}

            onSubmit={async (data) => {
                console.log('Form data:', data); // Teszteléshez naplózhatod az adatokat
                return { success: true }; // Alapértelmezett visszatérési érték
            }}       />
    )
}

export default Page