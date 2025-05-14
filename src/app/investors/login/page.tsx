import { Metadata } from 'next';
import InvestorLoginPage from './InvestorLoginPage';

export default async function () {
    return <InvestorLoginPage />;
}

export const metadata: Metadata = {
    title: 'Login',
};
