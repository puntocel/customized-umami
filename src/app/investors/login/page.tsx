'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { login } from './actions'
import styles from './LoginForm.module.css';
import Logo from '@/assets/logo.svg'; import {
    Icon,
} from 'react-basics';
import { useApi, useMessages } from '@/components/hooks';
import { setClientAuthToken } from '@/lib/client';

export default function InvestorLoginPage() {
    const { formatMessage, labels, getMessage } = useMessages();
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const investor_token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(investor_token);
        const formData = new FormData(e.currentTarget)
        // router.push('/investors')
        try {
            await login(formData)
            setClientAuthToken(investor_token);
            startTransition(() => {
                router.push('/investors')
            })
        } catch (err: any) {
            setError(err.message || 'Login failed')
        }
    }

    return (
        <>
            <div className={styles.login}>
                <Icon className={styles.icon} size="xl">
                    <Logo />
                </Icon>
                <div className={styles.title}>Investors</div>
                <form
                    onSubmit={handleSubmit}
                    className={styles.inv_form}
                >
                    {error && <p className={styles.inv_err}>{error}</p>}

                    <div className={styles.inv_form_div}>
                        <label htmlFor="email" className={styles.inv_label}>
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                        />
                    </div>

                    <div className={styles.inv_form_div}>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className={styles.submit_btn}
                    >
                        {isPending ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </>

    )
}
