'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyEmbed() {
  return (
    <div className="card overflow-hidden">
      <InlineWidget
        url="https://calendly.com/michaelhajster-ai"
        styles={{
          height: '700px',
          minWidth: '320px',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '171717',
          textColor: '171717'
        }}
      />
    </div>
  );
} 