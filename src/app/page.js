import HomeBox from './components/HomeBox';
import HomeTitle from './components/HomeTitle';
export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-0">
        <HomeTitle />
        <HomeBox />
      </div>
    </section>
  );
}
