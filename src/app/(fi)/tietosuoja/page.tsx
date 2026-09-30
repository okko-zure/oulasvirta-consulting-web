import { PrivacyPage, privacyMetadata } from '@/components/pages/PrivacyPage';

export const metadata = privacyMetadata('fi');

export default function Page() {
  return <PrivacyPage locale="fi" />;
}
