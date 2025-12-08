import Image from 'next/image';

function Header() {
  return (
    <header className="flex flex-row">
      <Image src="/assets/0800_black.png" alt="logo" width={104} height={36} />
    </header>
  );
}

export default Header;
