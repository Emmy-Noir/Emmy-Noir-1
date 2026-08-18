import { SectionHeading } from '@/components/site/section-heading';
import { getSettingsAsync } from '@/lib/data/site-settings';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const settings = await getSettingsAsync();

  return (
    <div className="container py-16 md:py-24">
      <SectionHeading eyebrow="The House" title="About EMMY NOIR" />
      <div className="mt-10 max-w-editorial space-y-6 text-sm text-muted-foreground md:text-base">
        <p>{settings.aboutShort}</p>
        <p>
          EMMY NOIR is built on two divisions — EMMY WEARS and EMMY JEWELRIES —
          with a future EMMY LUXE collection on the horizon. We design with
          restraint, favouring clean lines, premium materials, and a palette
          that lets each piece speak for itself.
        </p>
        <p>
          Our intention is to create a wardrobe and jewellery collection that
          feels considered, modern, and built to last — never loud, never
          temporary.
        </p>
      </div>
    </div>
  );
}
