'use client';
import WebsitesHeader from '@/app/(main)/settings/websites/WebsitesHeader';
import WebsitesDataTable from '@/app/(main)/settings/websites/WebsitesDataTable';
import { useTeamUrl } from '@/components/hooks';
import { useWebsites } from '@/components/hooks';
import { useEffect } from 'react';

export default function WebsitesPage({ websiteId }) {
  const { teamId } = useTeamUrl();


  // useEffect(() => {
  // console.log(teamId)
  const queryResult = useWebsites({ teamId: undefined });
  console.log(queryResult)
  // }, [teamId])

  return (
    <>
      <WebsitesHeader websiteId={websiteId} teamId={teamId} allowCreate={false} />
      <WebsitesDataTable teamId={teamId} allowEdit={false} />
    </>
  );
}
