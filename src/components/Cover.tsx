type CoverProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function Cover({ src, alt, className = "" }: CoverProps) {
  if (!src) {
    return <div className={`bg-cream-deep ${className}`} aria-hidden="true" />;
  }

  return (
    <img src={src} alt={alt} className={`object-cover ${className}`} />
  );
}
