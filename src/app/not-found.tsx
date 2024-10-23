'use client';
import { useRouter } from 'next/navigation';
import { Home, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-fit w-full flex items-start justify-center p-4 bg-background">
      <Card className="max-w-md w-full p-8 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for seems to have gone on vacation.
          </p>
        </div>

        <pre className="font-mono text-sm text-muted-foreground">
          {`     ___     
    (o,o)    
    (  _)    
     -"-`}
        </pre>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => router.push('/')}
            className="flex items-center gap-2"
          >
            <Home size={16} />
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => router.refresh()}
            className="flex items-center gap-2"
          >
            <RefreshCcw size={16} />
            Try Again
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;