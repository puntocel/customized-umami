import { Metadata } from 'next';
import InvestorLoginPage from './InvestorLoginPage';

export default async function () {
    const token = process.env.authToken;
    return <InvestorLoginPage token={token} />;
}

export const metadata: Metadata = {
    title: 'Investor Login',
};
