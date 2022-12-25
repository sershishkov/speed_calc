import Link from 'next/link';
export default function Custom404() {
  return (
    <h1>
      404 - Page Not Foundeee <Link href={`/`}>Go Home</Link>
    </h1>
  );
}
