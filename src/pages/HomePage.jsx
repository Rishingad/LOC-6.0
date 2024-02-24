
const HomePage = () => {
  return <>
    <nav className="bg-black flex justify-between align-middle w-full left-0 right-0 top-0 fixed navbar py-6 px-8">
      <div className="logo">
        <img src="/logo/logo.png" alt="" width={70} height={70} />
      </div>

      <ul className="text-white flex justify-between align-middle gap-x-2 menu-items w-96">
        <li><a className="font-bold font-sans" href="/">Home</a></li>
        <li><a className="font-bold font-sans" href="/sponsors">Sponsors</a></li>
        <li><a className="font-bold font-sans" href="/faq">FAQ</a></li>
        <li><a className="font-bold font-sans" href="/faq">FAQ</a></li>
        <li><a className="font-bold font-sans" href="/faq">FAQ</a></li>
        <li><a className="font-bold font-sans" href="/faq">FAQ</a></li>
      </ul>

    </nav>
  </>;
};

export default HomePage;
