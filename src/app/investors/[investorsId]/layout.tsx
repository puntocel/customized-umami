import { Metadata } from 'next';
import WebsiteProvider from './WebsiteProvider';

export default async function ({
  children,
  params,
}: {
  children: any;
  params: Promise<{ websiteId: string }>;
}) {
  // const { websiteId } = await params;
  const websiteId = 'c0342d10-22ec-443e-9582-2224616f99c1';

  console.log(websiteId)
  return <WebsiteProvider websiteId={websiteId}>{children}</WebsiteProvider>;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus',
    default: 'Websites | Nexus',
  },
};
