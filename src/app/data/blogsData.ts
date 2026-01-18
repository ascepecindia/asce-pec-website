export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string; // HTML-like string for rich text
}

export const blogsData: BlogPost[] = [
  {
    id: 'ai-civil-engineering-revolution',
    title: "Will AI Replace Civil Engineers? The Truth About Construction 2.0",
    excerpt: "From generative design to autonomous bricklayers, Artificial Intelligence is reshaping our skylines. Here’s why your next site manager might be an algorithm.",
    author: "Arjun Mehta, M.Tech Structures",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI", "Future Tech", "Construction 4.0"],
    content: `
      <p>The construction industry, notoriously slow to digitize, is suddenly at the forefront of the AI revolution. But does this mean the end of the hard-hat engineer?</p>
      
      <h3>The Rise of Generative Design</h3>
      <p>Tools like Autodesk's generative design algorithms can now test thousands of structural variations in minutes—optimizing for weight, cost, and sustainability faster than any human team. The role of the engineer is shifting from 'calculator' to 'curator'.</p>

      <h3>Autonomous Sites</h3>
      <p>We are already seeing Spot the Dog (Boston Dynamics) scanning sites for BIM discrepancies. By 2030, autonomous excavators and bricklaying robots will likely handle the dangerous, repetitive tasks, leaving humans to manage complex problem-solving.</p>

      <blockquote>"AI won't replace civil engineers. But civil engineers who use AI will replace those who don't."</blockquote>
    `
  },
  {
    id: 'self-healing-concrete',
    title: "The Concrete That Heals Itself: A 2026 Material Science Breakthrough",
    excerpt: "Cracks are the enemy of longevity. Enter Bioconcrete—a living material embedded with bacteria that limestone-fills cracks automatically.",
    author: "Dr. Sarah Khan, Material Scientist",
    date: "Dec 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop",
    tags: ["Sustainability", "Materials", "Innovation"],
    content: `
      <p>The Roman Pantheon is still standing after 2,000 years. Modern bridges? Not so much. The culprit is usually micro-cracks that allow water to rust the steel reinforcement.</p>

      <h3>The Secret Ingredient: Bacillus Bacteria</h3>
      <p>Scientists have successfully commercialized 'Bioconcrete'. It contains dormant bacteria spores and calcium lactate. When a crack forms and water enters, the bacteria wake up, eat the lactate, and excrete limestone—sealing the crack shut.</p>

      <h3>Cost vs. Lifespan</h3>
      <p>While 30% more expensive initially, self-healing structures could save trillions in maintenance costs globally. This is the biggest leap in cement technology since Portland cement.</p>
    `
  },
  {
    id: 'smart-cities-chandigarh',
    title: "Is Chandigarh Ready? The engineering challenges of Smart Cities",
    excerpt: "IoT sensors, intelligent traffic grids, and waste management. How India's first planned city is upgrading its grid for the 21st century.",
    author: "ASCE Editorial Team",
    date: "Nov 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Smart City", "Urban Planning", "Chandigarh"],
    content: `
      <p>Chandigarh was Le Corbusier's dream. Now, it needs to become a digital dream. The transition to a Smart City involves more than just installing cameras.</p>

      <h3>The Underground Network</h3>
      <p>The real challenge lies beneath our feet. Upgrading 60-year-old sewage and water lines with smart pressure sensors to detect leaks instantly is a logistical nightmare, yet essential for water conservation.</p>

      <h3>Traffic Engineering 2.0</h3>
      <p>By integrating adaptive traffic lights that respond to real-time flow rather than timers, Chandigarh aims to reduce carbon emissions from idling cars by 15%. This requires a massive data backbone that Civil Engineers must design alongside IT specialists.</p>
    `
  }
];