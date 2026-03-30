import { Mail, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

export default function CTA1() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-[90%] px-4 py-6 lg:px-8 lg:py-20">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
              linear-gradient(100.5deg, rgba(11, 79, 162, 0.5) 29.55%, rgba(11, 79, 162, 0.3) 93.8%),
              radial-gradient(38.35% 93.72% at 18.31% 6.28%, rgba(43, 158, 79, 0.6) 0%, rgba(11, 79, 162, 0.7) 100%),
              #083E80
            `,
          }}
        >
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-[var(--secondary-500)] px-4 py-1 text-center text-base leading-7 font-semibold text-white uppercase lg:text-left">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
              How Can You Reach Us?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-200 md:text-lg">
              If you need to get in touch, there are several ways to contact us.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <Link
                href="mailto:info@idealsolutions.com"
                className="flex items-center gap-2 text-white hover:text-[var(--secondary-500)] transition"
              >
                <Mail className="h-7 w-7 text-[var(--secondary-500)]" />
                info@idealsolutions.com
              </Link>
              <Link href="tel:+442012345678" className="flex items-center gap-2 text-white hover:text-[var(--secondary-500)] transition">
                <Phone className="h-7 w-7 text-[var(--secondary-500)]" />
                +44 (0) 20 1234 5678
              </Link>
              <Link
                href="https://idealsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[var(--secondary-500)] transition"
              >
                <Globe className="h-7 w-7 text-[var(--secondary-500)]" />
                idealsolutions.com
              </Link>
            </div>
            <ul className="mt-8 ml-4 list-disc text-sm text-gray-200 md:text-base">
              <li>Submit your query and state your requirements.</li>
              <li>
                Receive a call back from our experts as per your query to help
                for your need.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
