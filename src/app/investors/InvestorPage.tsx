'use client';
import WebsitesHeader from '@/app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from '@/app/(main)/settings/websites/WebsitesDataTable';
import { useTeamUrl } from '@/components/hooks';

export default function InvestorPage({ websiteId }) {
  const { teamId } = useTeamUrl();
  window.location.pathname = 'investors/c0342d10-22ec-443e-9582-2224616f99c1'
  return (
    <>
      <WebsitesHeader websiteId={websiteId} teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
