import WebsiteDetailsPage from './WebsiteDetailsPage';
import { Metadata } from 'next';

export default async function WebsitePage({ params }: { params: { investorsId: string } }) {
  const { investorsId } = await params;

  console.log('idpage', investorsId)
  return <WebsiteDetailsPage websiteId={investorsId} />;
}

export const metadata: Metadata = {
  title: 'Websites',
};
