export interface CanvasBlockData {
  id: string;
  icon: string;
  label: string;
  title: string;
  items: string[];
  accentColor: string;
  gridClass: string;
}

export const canvasBlocks: CanvasBlockData[] = [
  {
    id: 'key-partners',
    icon: '🤝',
    label: 'Key Partners',
    title: 'Who helps us deliver?',
    items: [
      'Local nurseries & plant wholesalers',
      'Soil & fertilizer suppliers',
      'Freelance horticulture experts',
      'Ceramic & pot manufacturers',
      'E-commerce platforms for supply',
      'Delivery & logistics partners',
      'Housing societies & associations',
      'Interior designers for B2B referrals'
    ],
    accentColor: '#52b788',
    gridClass: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 'key-activities',
    icon: '⚙️',
    label: 'Key Activities',
    title: 'What do we do daily?',
    items: [
      'Plant selection & sourcing',
      'Home visit & space consultation',
      'Planting & installation service',
      'Aftercare & maintenance scheduling',
      'Customer onboarding via website',
      'Admin dashboard management'
    ],
    accentColor: '#2d6a4f',
    gridClass: 'lg:col-span-1 lg:col-start-2 lg:row-start-1'
  },
  {
    id: 'key-resources',
    icon: '🧰',
    label: 'Key Resources',
    title: 'What do we need?',
    items: [
      'Plant inventory & storage space',
      'Skilled planting team / staff',
      'Website & admin dashboard',
      'Tools: pots, soil, fertilizers',
      'Transport vehicle for delivery',
      'Brand & social media presence'
    ],
    accentColor: '#2d6a4f',
    gridClass: 'lg:col-span-1 lg:col-start-2 lg:row-start-2'
  },
  {
    id: 'value-prop',
    icon: '✨',
    label: 'Value Proposition',
    title: 'Why choose PickAndPlant?',
    items: [
      'End-to-end home planting — pick, plant & maintain',
      'Curated plants matched to your space & light',
      'Zero effort for the customer — we do it all',
      'Affordable tiered plans for every budget',
      'Expert guidance on plant care post-installation',
      'Greener, healthier living spaces',
      'Subscription model for ongoing care'
    ],
    accentColor: '#d4a853',
    gridClass: 'lg:col-span-1 lg:col-start-3 lg:row-span-2'
  },
  {
    id: 'customer-rel',
    icon: '💬',
    label: 'Customer Relationships',
    title: 'How do we connect?',
    items: [
      'Contact form & email follow-ups',
      'WhatsApp support & updates',
      'Maintenance subscription check-ins',
      'Post-service satisfaction surveys',
      'Loyalty discounts for repeat clients'
    ],
    accentColor: '#95d5b2',
    gridClass: 'lg:col-span-1 lg:col-start-4 lg:row-start-1'
  },
  {
    id: 'channels',
    icon: '📣',
    label: 'Channels',
    title: 'How do we reach them?',
    items: [
      'PickAndPlant website',
      'Instagram & Pinterest marketing',
      'Google My Business listing',
      'Word of mouth & referrals',
      'Housing society tie-ups',
      'Influencer collaborations'
    ],
    accentColor: '#95d5b2',
    gridClass: 'lg:col-span-1 lg:col-start-4 lg:row-start-2'
  },
  {
    id: 'customer-seg',
    icon: '👥',
    label: 'Customer Segments',
    title: 'Who are we serving?',
    items: [
      'Urban apartment dwellers',
      'New homeowners & renters',
      'Home décor enthusiasts',
      'Offices & co-working spaces',
      'Hotels & hospitality venues',
      'Gifting — plant gift subscriptions',
      'Wellness-focused individuals'
    ],
    accentColor: '#a07850',
    gridClass: 'lg:col-span-1 lg:col-start-5 lg:row-span-2'
  },
  {
    id: 'cost-structure',
    icon: '💸',
    label: 'Cost Structure',
    title: 'What do we spend on?',
    items: [
      'Plant procurement & inventory',
      'Staff salaries & freelancer fees',
      'Transportation & delivery costs',
      'Website hosting & domain',
      'Marketing & social media ads',
      'Tools, pots & planting materials',
      'Storage / warehouse rent',
      'Customer support operations'
    ],
    accentColor: '#c97b5e',
    gridClass: 'lg:col-span-3 lg:row-start-3'
  },
  {
    id: 'revenue-streams',
    icon: '💰',
    label: 'Revenue Streams',
    title: 'How do we earn?',
    items: [
      'One-time planting service packages',
      'Monthly maintenance subscriptions',
      'Plant & pot retail add-ons',
      'Corporate / B2B contracts',
      'Plant gifting & hamper orders'
    ],
    accentColor: '#52b788',
    gridClass: 'lg:col-span-2 lg:row-start-3'
  }
];