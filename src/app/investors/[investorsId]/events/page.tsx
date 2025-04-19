import { Metadata } from 'next';
import EventsPage from './EventsPage';

export default async function ({ params }: { params: { investorsId: string } }) {
  const { investorsId } = await params;
  // const websiteId = 'c0342d10-22ec-443e-9582-2224616f99c1';
  return <EventsPage websiteId={investorsId} />;
}

export const metadata: Metadata = {
  title: 'Event Data',
};
