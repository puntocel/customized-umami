import { Metadata } from 'next';
import WebsiteProvider from './WebsiteProvider';

export default async function ({
  children,
  params,
}: {
  children: any;
  params: Promise<{ investorsId: string }>;
}) {
  const { investorsId } = await params;

  console.log(investorsId)
  return <WebsiteProvider websiteId={investorsId}>{children}</WebsiteProvider>;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus',
    default: 'Websites | Nexus',
  },
};
