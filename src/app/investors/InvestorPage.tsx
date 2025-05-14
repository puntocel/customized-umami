'use client';
import WebsitesHeader from '@/app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from '@/app/(main)/settings/websites/WebsitesDataTable';
import { useTeamUrl } from '@/components/hooks';
import { useEffect, useState } from 'react';

export default function InvestorPage() {
  const { teamId } = useTeamUrl();
  const [websiteId, setWebsiteId] = useState('');
  useEffect(() => {
    if (window && !websiteId) {
      const investorId = (window as any)._RUNTIME_ENV_?.INVESTOR_ID;

      if (investorId && investorId !== websiteId) {
        setWebsiteId(investorId);
        window.location.replace(`investors/${investorId}`);
      }
    }
  }, [])
  return (
    <>
      <WebsitesHeader websiteId={websiteId} teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
