'use client';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, Book, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from "framer-motion"
import {useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { allNotesList } from '@/utils/bundle-items';

function searchArticles(query: string) {
  const results = [];
  for (const note of allNotesList) {
    if (note.name.toLowerCase().includes(query.toLowerCase())) {
      results.push(note);
    }
    if(results.length >= 5) {
      break;
    }
  }
  return results;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}


const NotesLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ name: string; url: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery.length <= 1) {
      return setSearchResults([]);
    }
    const results = searchArticles(searchQuery)
    setSearchResults(results)
  }, [searchQuery])


  return (
    <div className="min-h-fit">
      <main className={`max-w-4xl mx-auto transition-all duration-1000`}>
        {/* Hero Section */}
        <div className="text-center py-12 space-y-6">
          <h1 className="text-5xl font-bold text-secondary-foreground">
            Hi there :)
            <span className="animate-bounce inline-block ml-4">
              <Sparkles className="w-8 h-8 text-secondary-foreground" />
            </span>
          </h1>
          <p className="text-xl text-secondary-foreground">
            Comprehensive notes for Developers
          </p>
        </div>

        {/* Search component */}
        <div className="flex items-center justify-center">
          <div className="flex gap-2 w-full max-w-2xl">
            <Input
              placeholder="Search for notes..."
              className="flex-grow text-secondary-foreground"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} 
            />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>

        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-2 px-24 py-4"
      >
        {searchResults.map((note ,index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ x: 10 }}
            onClick={() => router.push(note.url)}
            className="flex items-center justify-between p-3 rounded-lg bg-primary/5 hover:bg-primary/10 cursor-pointer group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Book className="w-6 h-6" />
              </div>
              <span className="font-medium">{note.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p>Welcome to Contribute* </p>
        </footer>
      </main>
    </div>
  );
};

export default NotesLanding;