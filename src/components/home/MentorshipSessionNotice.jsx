import { FaTelegram } from 'react-icons/fa6';
import { SITE } from '../../lib/constants';

export function MentorshipSessionStartsSoon() {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-brand-orange/25 bg-brand-soft-orange px-4 py-2 text-sm font-semibold text-brand-text">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
        </span>
        Session starts soon
      </span>
      <span className="hidden h-3 w-px bg-brand-text/15 sm:inline" aria-hidden="true" />
      <a
        href={SITE.telegramGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-brand-orange transition-colors hover:text-brand-orange-bright"
      >
        <FaTelegram className="h-4 w-4" aria-hidden="true" />
        {SITE.telegramGroupHandle}
      </a>
    </div>
  );
}

export function MentorshipTelegramGroupLink({ className = '' }) {
  return (
    <a
      href={SITE.telegramGroupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-bright hover:underline ${className}`}
    >
      <FaTelegram className="h-4 w-4" aria-hidden="true" />
      Join our Telegram group ({SITE.telegramGroupHandle})
    </a>
  );
}
