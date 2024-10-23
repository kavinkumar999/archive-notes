import { Code, Database, Layout, Sparkles } from 'lucide-react';

const NotesLanding = () => {

  const categories = [
    {
      title: "System Design",
      icon: <Database className="w-6 h-6" />,
      description: "Scalability, distributed systems, microservices architecture, and Load Balancer"
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      description: "API design, database optimization, server architecture, and authentication"
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      description: "JavaScript, DOM manipulation, React Hooks and Components"
    }
  ];

  return (
    <div className="min-h-fit">
      <main className={`max-w-4xl mx-auto transition-all duration-1000`}>
        {/* Hero Section */}
        <div className="text-center py-12 space-y-6">
          <h1 className="text-5xl font-bold text-secondary-foreground">
            Hi there :)
            <span className="animate-bounce inline-block ml-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </span>
          </h1>
          <p className="text-xl text-secondary-foreground">
            Comprehensive notes for Developers
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-300 transform hover:-translate-y-1 cursor-pointer backdrop-blur-sm border-primary p-4 border rounded-lg`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p>Updated periodically, Welcome to Contribute* </p>
        </footer>
      </main>
    </div>
  );
};

export default NotesLanding;