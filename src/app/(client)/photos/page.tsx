import { Header } from '@/components/Header';
import PhotosList from './components/PhotosList';

export default async function PhotosPage() {
  return (
    <div className="mb-[36px] flex flex-col gap-[40px] md:mb-[24px]">
      <Header title="All photos" logoAlignment="start" />
      <PhotosList />
    </div>
  );
}
