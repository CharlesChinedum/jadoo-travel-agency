import {
  BookTrip,
  Destinations,
  Footer,
  Hero,
  Services,
  Subscribe,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
