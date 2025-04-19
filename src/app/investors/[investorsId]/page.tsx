import WebsiteDetailsPage from './WebsiteDetailsPage';
import { Metadata } from 'next';

export default async function WebsitePage({ params }: { params: { investorsId: string } }) {
  const { investorsId } = await params;
  // const websiteId = 'c0342d10-22ec-443e-9582-2224616f99c1';
  console.log('idpage', investorsId)
  return <WebsiteDetailsPage websiteId={investorsId} />;
}

export const metadata: Metadata = {
  title: 'Websites',
};
