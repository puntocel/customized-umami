import { Metadata } from 'next';
import EventsPage from './EventsPage';

export default async function ({ params }: { params: { investorsId: string } }) {
  const { investorsId } = await params;
  return <EventsPage websiteId={investorsId} />;
}

export const metadata: Metadata = {
  title: 'Event Data',
};
