export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  category: 'physical' | 'digital';
}

export const products: Product[] = [
  {
    id: 'creator-hoodie',
    name: 'Creator Hoodie',
    price: 1999,
    image: '/assets/generated/creator-hoodie.dim_800x800.png',
    shortDescription: 'Premium branded merchandise for creators',
    fullDescription:
      'Elevate your creator brand with our premium Creator Hoodie. Made from high-quality cotton blend fabric, this hoodie features a minimalist design perfect for content creators, influencers, and digital entrepreneurs. Available in multiple sizes with custom branding options. Perfect for building your merch line or personal brand identity.',
    category: 'physical',
  },
  {
    id: 'monetisation-ebook',
    name: 'Monetisation Ebook',
    price: 4999,
    image: '/assets/generated/monetisation-ebook.dim_800x800.png',
    shortDescription: 'Complete guide to creator monetisation strategies',
    fullDescription:
      'Unlock the secrets to successful creator monetisation with our comprehensive ebook. Learn proven strategies for building multiple income streams, launching digital products, setting up membership programs, and scaling your creator business. Includes case studies, templates, and actionable frameworks used by top creators earning 6-7 figures annually.',
    category: 'digital',
  },
  {
    id: 'digital-course',
    name: 'Brand Launch Masterclass',
    price: 14999,
    image: '/assets/generated/digital-course.dim_800x800.png',
    shortDescription: 'Complete online course for launching your creator brand',
    fullDescription:
      'Master the art of launching and scaling your creator brand with our flagship online course. This comprehensive masterclass covers brand strategy, visual identity, website development, product creation, marketing funnels, and growth tactics. Includes 50+ video lessons, downloadable templates, live Q&A sessions, and lifetime access to our creator community.',
    category: 'digital',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
