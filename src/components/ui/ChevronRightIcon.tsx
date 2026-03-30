interface ChevronRightIconProps {
  className?: string;
}

export default function ChevronRightIcon({ className = "w-4 h-4" }: ChevronRightIconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}
