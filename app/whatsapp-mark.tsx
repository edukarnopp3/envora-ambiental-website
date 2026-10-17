export default function WhatsAppMark({ className = "" }: { className?: string }) {
  return (
    <span className={`whatsapp-mark ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 28 28" focusable="false">
        <path d="M14 4.1a9.7 9.7 0 0 0-8.3 14.7l-1.3 4.7 4.8-1.3A9.7 9.7 0 1 0 14 4.1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.3 9.3c.3-.3.6-.4.9-.4h.7c.2 0 .5.1.6.5l1 2.1c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.7.5.9 1.2 1.6 2 2.1.3.2.5.2.7 0l.7-.7c.2-.2.4-.2.7-.1l2.1 1c.3.1.4.4.4.6 0 .3-.2 1-.6 1.4-.4.4-1.1.7-1.8.6-1.6-.2-3.4-1.2-5-2.6-1.4-1.3-2.5-3-2.7-4.4-.1-.9.2-1.7.7-2.2Z" fill="currentColor" />
      </svg>
    </span>
  );
}
