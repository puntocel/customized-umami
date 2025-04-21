import WebsiteRealtimePage from './WebsiteRealtimePage';
import { Metadata } from 'next';

export default async function ({ params }: { params: { investorsId: string } }) {
  const { investorsId } = await params;

  return <WebsiteRealtimePage websiteId={investorsId} />;
}

export const metadata: Metadata = {
  title: 'Real-time',
};
