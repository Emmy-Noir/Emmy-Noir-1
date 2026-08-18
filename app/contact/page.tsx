import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { getSettings } from '@/lib/site-settings';

export default function ContactPage() {
  const settings = getSettings();
  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Talk to us"
        title="Contact"
        description="Reach the house through any of the channels below."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={settings.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-foreground"
        >
          <MessageCircle className="h-5 w-5 text-gold" />
          <div>
            <p className="eyebrow">WhatsApp</p>
            <p className="mt-1 text-sm">{settings.whatsappNumber}</p>
          </div>
        </a>
        <a
          href={`mailto:${settings.email}`}
          className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-foreground"
        >
          <Mail className="h-5 w-5 text-gold" />
          <div>
            <p className="eyebrow">Email</p>
            <p className="mt-1 text-sm">{settings.email}</p>
          </div>
        </a>
        <a
          href={`tel:${settings.phone.replace(/\s/g, '')}`}
          className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-foreground"
        >
          <Phone className="h-5 w-5 text-gold" />
          <div>
            <p className="eyebrow">Phone</p>
            <p className="mt-1 text-sm">{settings.phone}</p>
          </div>
        </a>
        <a
          href={settings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card flex items-center gap-4 p-6 transition-colors hover:border-foreground"
        >
          <Instagram className="h-5 w-5 text-gold" />
          <div>
            <p className="eyebrow">Instagram</p>
            <p className="mt-1 text-sm">@emmynoir</p>
          </div>
        </a>
      </div>
      <p className="mt-8 max-w-editorial text-sm text-muted-foreground">
        {settings.deliveryMessage}
      </p>
    </div>
  );
}
