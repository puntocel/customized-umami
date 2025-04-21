'use client';
import WebsitesHeader from '@/app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from '@/app/(main)/settings/websites/WebsitesDataTable';
import { useLogin, useTeamUrl } from '@/components/hooks';
import { useEffect } from 'react';
import useInvestors from '@/components/hooks/queries/useInvestors';
import { getClientAuthToken } from '@/lib/client';

export default function InvestorPage({ websiteId }) {
  const { teamId } = useTeamUrl();

  useEffect(() => {
    if (window) {
      window.location.pathname = `investors/${websiteId}`
    }
  }, [])
  return (
    <>
      <WebsitesHeader websiteId={websiteId} teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
