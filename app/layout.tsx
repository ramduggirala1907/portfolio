import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:5173'),
  title: 'Ramarao Duggirala | Network Security Engineer',
  description: 'Network Security Engineer and Cybersecurity Specialist securing enterprise networks, defending infrastructure, and engineering reliable backend systems.',
  keywords: ['Network Security Engineer', 'Cybersecurity Specialist', 'Backend Engineer', 'Application Security', 'FortiGate', 'Splunk', 'Python', 'DevOps'],
  openGraph: {
    title: 'Ramarao Duggirala | Network Security Engineer',
    description: 'Securing Networks. Defending Infrastructure. Engineering Reliable Systems.',
    type: 'website',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
