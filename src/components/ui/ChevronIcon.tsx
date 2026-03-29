interface ChevronIconProps {
  className?: string;
}

export default function ChevronIcon({ className = "w-4 h-4" }: ChevronIconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
