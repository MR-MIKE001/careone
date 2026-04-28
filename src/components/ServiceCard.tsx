type Props = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="border border-(--color-text-border) p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-(--color-text-primary) mb-2">{title}</h3>
      <p className="text-(--color-text-secondary)">{description}</p>
    </div>
  );
};

export default ServiceCard;