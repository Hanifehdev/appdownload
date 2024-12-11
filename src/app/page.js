import HomeBox from './components/HomeBox';
import HomeTitle from './components/HomeTitle';
export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <HomeTitle />
        <HomeBox />
      </div>
    </section>
  );
}
