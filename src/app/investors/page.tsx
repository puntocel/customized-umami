
'use client'

import InvestorPage from './InvestorPage';
import { Suspense } from 'react';

console.log(process.env.NEXT_PUBLIC_INVESTOR_ID)
const INVESTOR_ID = process.env.NEXT_PUBLIC_INVESTOR_ID || '5b40fef7-d9c5-4752-b914-e298a7e89715';

export default function () {
  const investorId = INVESTOR_ID
  return <Suspense><InvestorPage websiteId={investorId} /></Suspense>;
}