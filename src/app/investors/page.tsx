
import { Suspense } from 'react';
import InvestorPage from './InvestorPage';

export default function () {
  console.log("INVESTOR_ID:", process.env.investorId)
  const investorId = process.env.investorId || '5b40fef7-d9c5-4752-b914-e298a7e89715';

  return <Suspense><InvestorPage websiteId={investorId} /></Suspense>;
}