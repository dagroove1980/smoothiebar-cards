import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="flex items-center justify-center mb-6"
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              backgroundColor: 'rgba(76, 175, 80, 0.08)',
            }}
          >
            <Leaf size={32} style={{ color: '#4CAF50' }} />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
            Recipe not found
          </h1>
          <p className="text-base text-secondary max-w-md mb-8">
            This smoothie doesn&apos;t exist — yet. Head back to the kitchen and find something delicious.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Browse all recipes
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
