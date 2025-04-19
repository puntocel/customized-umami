'use client'

import useInvestors from '@/components/hooks/queries/useInvestors';
import InvestorPage from './InvestorPage';
import { Metadata } from 'next';
import { useLogin } from '@/components/hooks';
import { getClientAuthToken } from '@/lib/client';
import { useState, useEffect } from 'react';

export default function () {
  const queryResult = useInvestors({})
  const [investorId, setInvestorId] = useState('')
  const userid = localStorage.getItem('userId')

  fetch(`/api/users/${userid}/websites`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getClientAuthToken()}`
    },
  }).then(async res => {
    const data = await res.json();
    setInvestorId(data.data[0]?.id)
  });
  useEffect(() => {

    console.log(investorId)
  }, [investorId])

  return <InvestorPage websiteId={investorId} />;
}

// export const metadata: Metadata = {
//   title: 'inverstors',
// };
