import Image from 'next/image';

export const Header = ({
  title,
  logoAlignment = 'center',
}: {
  title: string;
  logoAlignment?: 'center' | 'start';
}) => {
  return (
    <div className={`flex flex-col gap-[24px] items-${logoAlignment}`}>
      <Image src="/logo.svg" alt="Clever Photos" width={75} height={75} />
      <h1 className="h-[23px] text-xl font-bold">{title}</h1>
    </div>
  );
};
