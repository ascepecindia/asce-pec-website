export type EventItem = {
  id: string;
  title: string;
  date: string;
  category: "Flagship" | "Workshop" | "Lecture" | "Visit" | "Competition" | "Exhibition" | "Conference" | "Cultural";
  description: string;
  image: string;
  link?: string;
  gallery?: string[];
};

export const eventHistory: Record<string, EventItem[]> = {
  "2025": [
    {
      id: "rec-25",
      title: "Reconnaissance 2025",
      date: "April 21-23, 2025",
      category: "Flagship",
      description: "The annual technical fest hosted by ASCE PEC. Featuring 'Concrete Frisbee', 'Bridge It', and the 'Autocad Challenge'.",
      image: "https://pec.ac.in/sites/default/files/events/reconnaissance-2025-cover.jpg",
      link: "/events/rec-25",
      gallery: [
        "https://images.unsplash.com/photo-1581094794329-cd1096d9a5b5?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1517089152318-42ec560349c0?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800"
      ]
    },
    {
      id: "cissc-25",
      title: "CISSC 2025: Sustainable Smart Cities",
      date: "Feb 7-9, 2025",
      category: "Conference",
      description: "ASCE International Conference on Challenges and Innovations for Sustainable Smart Cities, held at Hotel Novotel.",
      image: "https://pec.ac.in/sites/default/files/events/cissc-2025-group.jpg",
      link: "/events/cissc-25",
      gallery: [
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800"
      ]
    },
    {
      id: "bullseye-25",
      title: "Placement Session & MBA Scholarship Test",
      date: "January 19, 2025",
      category: "Workshop",
      description: "Exclusive guidance session by Hitbullseye for CAT/GRE prep and placement strategies, featuring a scholarship test.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000",
      link: "/events/bullseye-25",
      gallery: [
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
      ]
    },
    {
      id: "pecfest-25",
      title: "PECFEST 2025: A Crescent Mirage",
      date: "Nov 21-23, 2025",
      category: "Cultural",
      description: "North India's largest Techno-Cultural fest featuring The Yellow Diary, Nucleya, and a massive Defence Expo.",
      image: "https://pec.ac.in/sites/default/files/styles/large/public/events/pecfest-2025-banner.jpg",
      link: "/events/pecfest-25",
      gallery: [
        "https://images.unsplash.com/photo-1459749411177-0473ef71607b?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800"
      ]
    }
  ],
  "2024": [
    {
      id: "rec-24",
      title: "Reconnaissance 2024",
      date: "April 12-14, 2024",
      category: "Flagship",
      description: "The annual flagship technical fest of ASCE PEC featuring bridge building, quizzes, and concrete challenges.",
      image: "https://asceisnorthernregion.org/wp-content/uploads/2024/05/1713169690855-768x576.jpg",
      link: "https://drive.google.com/file/d/15hfmapbHUPvfubW4_P4wzkj9vm8qWYfv/view"
    },
    {
      id: "agm-24",
      title: "Annual General Meeting '24",
      date: "February 17, 2024",
      category: "Lecture",
      description: "The official gathering to discuss the chapter's progress and future roadmap.",
      image: "https://asceisnorthernregion.org/wp-content/uploads/2024/02/IMG_5420-1-scaled.jpg",
      link: "https://drive.google.com/file/d/15hfmapbHUPvfubW4_P4wzkj9vm8qWYfv/view"
    }
  ],
  "2023": [
    {
      id: "rec-23",
      title: "Reconnaissance '23",
      date: "April 28-30, 2023",
      category: "Flagship",
      description: "A celebration of civil engineering innovation with participants from across the northern region.",
      image: "http://asceisnorthernregion.org/wp-content/uploads/2023/09/ASCE2-3.jpg",
      link: "https://asceisnorthernregion.org/event-101/"
    },
    {
      id: "agm-23",
      title: "Annual General Meeting '23",
      date: "March 18, 2023",
      category: "Lecture",
      description: "Reviewing a year of successful workshops and site visits.",
      image: "https://asceisnorthernregion.org/wp-content/uploads/2023/03/IMG_4897-min-min-1-1-1-1-5-768x429.jpg",
      link: "https://asceisnorthernregion.org/the-annual-general-meeting-agm/"
    }
  ],
  "2022": [
    {
      id: "symposium-22",
      title: "ASCE India Symposium",
      date: "March 25-27, 2022",
      category: "Flagship",
      description: "Hosted the prestigious ASCE India Symposium, bringing together student chapters from across the country.",
      image: "http://asceisnorthernregion.org/wp-content/uploads/2023/09/ASCE-SYP.jpg",
      link: "https://asceisnorthernregion.org/symposium/"
    }
  ],
  "2020": [
    {
      id: "geo-20",
      title: "Geospatial Technology Seminar",
      date: "October 3, 2020",
      category: "Lecture",
      description: "A deep dive into the 'Role of Geospatial Technology in the New Era of Development'.",
      image: "https://asceisnorthernregion.org/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-09-at-9.00.02-PM-600x392.jpeg",
      link: "https://asceisnorthernregion.org/role-of-geospatial-technology-workshop/"
    },
    {
      id: "pres-visit-20",
      title: "Presidential Visit",
      date: "February 27, 2020",
      category: "Visit",
      description: "A special visit by ASCE dignitaries to the PEC campus.",
      image: "http://asceisnorthernregion.org/wp-content/uploads/2020/08/WhatsApp-Image-2020-07-28-at-11.02.58-PM-1024x683.jpeg",
      link: "https://asceisnorthernregion.org/presidential-visit/"
    }
  ],
  "2017": [
    {
      id: "rec-17",
      title: "Reconnaissance 2017",
      date: "March 24 - April 9, 2017",
      category: "Flagship",
      description: "Included 'Concreto' (Concrete Canoe), 'Earth Stabilizer' (Block making), and 'Trussler' (Bridge making).",
      image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1000",
      link: "https://ascepec.wordpress.com/reconnaissance/"
    },
    {
      id: "road-safety-17",
      title: "Road Safety Street Play",
      date: "January 17, 2017",
      category: "Visit",
      description: "Performed at Sector 17 Plaza to raise awareness about traffic rules and road safety.",
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1000",
      link: "https://ascepec.wordpress.com/our-events-2016/"
    }
  ],
  "2016": [
    {
      id: "pecfest-16",
      title: "PECFEST Civil Events",
      date: "October 2016",
      category: "Competition",
      description: "Featuring 'Concrete Canoe', 'It's My City' (Smart City Design), and 'Sight'em All' (Surveying).",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1000",
      link: "https://ascepec.wordpress.com/competitions/"
    },
    {
      id: "etabs-16",
      title: "ETABS Workshop",
      date: "August 16, 2016",
      category: "Workshop",
      description: "Training 2nd and 3rd years on high-rise building analysis software.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
      link: "https://ascepec.wordpress.com/our-events-2016/"
    },
    {
      id: "model-16",
      title: "Orientation Model Display",
      date: "August 2016",
      category: "Exhibition",
      description: "Showcasing models of the Bhakra Dam, Pong Dam, and a 7ft Concrete Canoe.",
      image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1000",
      link: "https://ascepec.wordpress.com/our-events-2016/"
    }
  ]
};