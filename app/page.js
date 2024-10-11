import Accordion from './components/Accordion';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  const accordionItems = [
    {
      title: 'how to order online?',
      content: 'This is the content for item 1.',
    },
    {
      title: 'Does cash on delivery available or not?',
      content: 'This is the content for item 2.',
    },
    {
      title: 'How to order two many Items?',
      content: 'This is the content for item 3.',
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <Banner />
      <Testimonials />
      <Accordion />
      <div className="container mx-auto p-8">
        <h1 className='text-3xl  text-red-400'>FAQ's</h1>
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <Accordion items={accordionItems} />
      </div>
      <Contact />
    </>
  );
}
