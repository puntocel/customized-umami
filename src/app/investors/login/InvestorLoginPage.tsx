'use client'

import {
    Form,
    FormRow,
    FormInput,
    FormButtons,
    TextField,
    PasswordField,
    SubmitButton,
    Icon,
} from 'react-basics';
import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { login } from './actions'
import styles from './LoginForm.module.css';
import Logo from '@/assets/logo.svg';
import { setClientAuthToken } from '@/lib/client';

export default function InvestorLoginPage() {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const [authToken, setAuthToken] = useState<string | null>(null)
    const router = useRouter()
    const investor_token = authToken;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(investor_token);
        const formData = new FormData(e.currentTarget)
        // router.push('/investors')
        try {
            await login(formData)
            setClientAuthToken(investor_token);
            startTransition(() => {
                router.push(`/investors`);
            })
        } catch (err: any) {
            setError(err.message || 'Login failed')
        }
    }

    useEffect(() => {
        if (window) {
            const adminToken = (window as any)._RUNTIME_ENV_?.ADMIN_TOKEN;
            setAuthToken(adminToken);
        }
    }, []);

    return (
        <>
            <div className={styles.login}>
                <Icon className={styles.icon} size="xl">
                    <Logo />
                </Icon>
                <div className={styles.title}>Digital Economy Nexus</div>
                <form
                    onSubmit={handleSubmit}
                    className={styles.inv_form}
                >
                    {error && <p className={styles.inv_err}>{error}</p>}

                    <div className={styles.inv_form_div}>
                        <label htmlFor="id" className={styles.inv_label}>
                            ID
                        </label>
                        <input
                            name="id"
                            type="id"
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
