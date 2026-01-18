export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string; // Stores the full article HTML
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
      <p class="lead">The construction industry, notoriously slow to digitize, is suddenly at the forefront of the AI revolution. But does this mean the end of the hard-hat engineer?</p>
      
      <h3>The Rise of Generative Design</h3>
      <p>Tools like Autodesk's generative design algorithms can now test thousands of structural variations in minutes—optimizing for weight, cost, and sustainability faster than any human team. The role of the engineer is shifting from 'calculator' to 'curator'. instead of spending weeks on load calculations, engineers now define the constraints and let AI find the optimal geometry.</p>

      <h3>Autonomous Sites & Robotics</h3>
      <p>We are already seeing <strong>Spot the Dog (Boston Dynamics)</strong> scanning sites for BIM discrepancies. By 2030, autonomous excavators and bricklaying robots will likely handle the dangerous, repetitive tasks. This shift reduces onsite accidents by an estimated 40%.</p>

      <h3>Predictive Maintenance</h3>
      <p>Smart sensors embedded in bridges now feed data into AI models that predict structural failure months in advance. This "Digital Twin" technology is saving billions in infrastructure maintenance globally.</p>

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
      <p class="lead">The Roman Pantheon is still standing after 2,000 years. Modern bridges? Not so much. The culprit is usually micro-cracks that allow water to rust the steel reinforcement.</p>

      <h3>The Secret Ingredient: Bacillus Bacteria</h3>
      <p>Scientists have successfully commercialized <strong>'Bioconcrete'</strong>. It contains dormant bacteria spores and calcium lactate capsules. When a crack forms and water enters, the bacteria 'wake up', eat the lactate, and excrete limestone—sealing the crack shut within 3 weeks.</p>

      <h3>Cost vs. Lifespan Analysis</h3>
      <p>While Bioconcrete is currently 30% more expensive than Portland cement, the lifecycle analysis tells a different story. Self-healing structures could save trillions in global maintenance costs over 50 years, making them the most sustainable option for critical infrastructure like dams and tunnels.</p>
      
      <p>This technology effectively turns our cities into living organisms that repair themselves.</p>
    `
  },
  {
    id: 'hyperloop-india-infrastructure',
    title: "Hyperloop: Pipe Dream or Future of Transport?",
    excerpt: "Mumbai to Pune in 25 minutes? Analyzing the engineering feasibility, vacuum physics, and civil infrastructure hurdles of the Hyperloop.",
    author: "ASCE Editorial Team",
    date: "Nov 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556388275-bb5585725805?q=80&w=1000&auto=format&fit=crop",
    tags: ["Transport", "Infrastructure", "Megaprojects"],
    content: `
      <p class="lead">Elon Musk's whitepaper sparked a frenzy, but can we actually build a vacuum tube across a continent? For Civil Engineers, the Hyperloop presents the ultimate structural challenge.</p>

      <h3>The Thermal Expansion Problem</h3>
      <p>A steel tube stretching hundreds of kilometers will expand and contract massively with temperature changes. Unlike rail tracks that have gaps, a vacuum tube must remain airtight. Engineers are designing revolutionary <strong>sliding expansion joints</strong> and using pylons with flexible dampeners to handle this movement.</p>

      <h3>Tunneling vs. Pylons</h3>
      <p>While pylons are cheaper, land acquisition in India is difficult. Underground tunneling (using TBMs) solves this but increases cost by 10x. The consensus? A hybrid model is likely, with urban centers moving underground.</p>

      <h3>The Verdict</h3>
      <p>Technically feasible? Yes. Economically viable? That remains the trillion-dollar question that the next generation of civil engineers (you) will have to answer.</p>
    `
  }
];