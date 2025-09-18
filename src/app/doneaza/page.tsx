import type { Metadata } from "next";
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { trackRedirect } from '@/lib/analytics';

export const metadata: Metadata = {
  title: "Donează pentru Educație - Fundația Magheru 68",
  description: "Susține educația în România prin donații către Fundația Magheru 68. Contribuie la Gala de Excelență în Educație și ajută-ne să facem diferența în comunitate.",
  keywords: ["donații", "educație", "Fundația Magheru 68", "caritate", "România", "Gala de Excelență"],
  openGraph: {
    title: "Donează pentru Educație - Fundația Magheru 68",
    description: "Susține educația în România prin donații către Fundația Magheru 68. Contribuie la Gala de Excelență în Educație și ajută-ne să facem diferența în comunitate.",
    type: "website",
    locale: "ro_RO",
    siteName: "Fundația Magheru 68",
    url: "https://magheru68.ro/doneaza",
    images: [
      {
        url: "/logo_black.webp",
        width: 1200,
        height: 630,
        alt: "Fundația Magheru 68 - Donează pentru Educație",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donează pentru Educație - Fundația Magheru 68",
    description: "Susține educația în România prin donații către Fundația Magheru 68. Contribuie la Gala de Excelență în Educație și ajută-ne să facem diferența în comunitate.",
    images: ["/logo_black.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://magheru68.ro/doneaza",
  },
};

export default async function DonatePage() {
  // Track the redirect
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || undefined;
  const forwardedFor = headersList.get('x-forwarded-for');
  const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : headersList.get('x-real-ip') || undefined;

  // Track the redirect access
  try {
    await trackRedirect('/doneaza', userAgent, ipAddress);
  } catch (error) {
    console.error('Failed to track redirect:', error);
  }

  // Redirect to the event page with donations section
  redirect('/evenimente/gala-de-excelenta-in-educatie-2025#donatii');
}