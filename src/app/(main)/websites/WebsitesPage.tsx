'use client';
import WebsitesHeader from '@/app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from '@/app/(main)/settings/websites/WebsitesDataTable';
import { useTeamUrl } from '@/components/hooks';

export default function WebsitesPage({ websiteId }) {
  const { teamId } = useTeamUrl();

  return (
    <>
      <WebsitesHeader websiteId={websiteId} teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
