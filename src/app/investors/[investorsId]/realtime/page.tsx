import WebsiteRealtimePage from './WebsiteRealtimePage';
import { Metadata } from 'next';

export default async function ({ params }: { params: { websiteId: string } }) {
  // const { websiteId } = await params;
  const websiteId = 'c0342d10-22ec-443e-9582-2224616f99c1';
  return <WebsiteRealtimePage websiteId={websiteId} />;
}

export const metadata: Metadata = {
  title: 'Real-time',
};
