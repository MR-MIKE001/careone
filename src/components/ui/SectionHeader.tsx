// src/components/ui/SectionHeader.tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) => {
  return (
    <div
      className={`section-header ${
        align === 'center' ? 'section-header-center' : ''
      }`}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;