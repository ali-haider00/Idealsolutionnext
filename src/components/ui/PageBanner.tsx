import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  backgroundImage: string;
}

export default function PageBanner({ title, subtitle, breadcrumb, backgroundImage }: PageBannerProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl opacity-90 mb-4">{subtitle}</p>}
          <p className="text-lg opacity-90">{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
}
