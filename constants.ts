
import { BranchId, BranchInfo, Service } from './types';

export const BRANCHES: Record<BranchId, BranchInfo> = {
  [BranchId.ATHI_RIVER]: {
    id: BranchId.ATHI_RIVER,
    name: 'Greatwall Gardens Branch',
    address: 'Edon Business Center, Greatwall Gardens, Athi River',
    description: 'Serving the Athi River community with high-precision diagnostics and specialized ultrasound scans.',
    hours: 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: Closed',
    phone: '+254 759 565 366'
  },
  [BranchId.KITENGELA]: {
    id: BranchId.KITENGELA,
    name: 'Kitengela Town Branch',
    address: 'Oserian House 1st Flr, Mirriams Road (Opposite Miriams House), Kitengela',
    description: 'Our flagship town branch offering rapid pathology and comprehensive clinical lab services.',
    hours: 'Daily: 8:00 AM - 8:00 PM | Sundays: Closed',
    phone: '+254 759 565 366'
  }
};

export const SERVICES: Service[] = [
  {
    title: 'Obstetric Ultrasound',
    description: 'Detailed fetal anatomy scans, growth monitoring, and gender reveal scans.',
    category: 'ULTRASOUND',
    icon: 'Baby'
  },
  {
    title: 'Pelvic Ultrasound',
    description: 'Specialized imaging of the pelvic region for reproductive health monitoring.',
    category: 'ULTRASOUND',
    icon: 'Activity'
  },
  {
    title: 'Abdominal Ultrasound',
    description: 'High-resolution imaging for organs including liver, gallbladder, and spleen.',
    category: 'ULTRASOUND',
    icon: 'Activity'
  },
  {
    title: 'KUB / Renal Ultrasound',
    description: 'Imaging of the Kidneys, Ureters, and Bladder for diagnostic clarity.',
    category: 'ULTRASOUND',
    icon: 'Activity'
  },
  {
    title: 'Prostate Ultrasound',
    description: 'Transrectal or pelvic imaging to evaluate the prostate gland.',
    category: 'ULTRASOUND',
    icon: 'Activity'
  },
  {
    title: 'Hematology & Blood Tests',
    description: 'Complete blood counts, blood grouping, and infection screening.',
    category: 'LAB',
    icon: 'Droplets'
  },
  {
    title: 'Biochemistry Panels',
    description: 'Liver function tests, kidney profiles, and lipid metabolism screening.',
    category: 'LAB',
    icon: 'TestTube2'
  }
];

export const SEO_COPY = {
  sitemap: [
    { page: 'Home', keywords: 'Icore Diagnostics Athi River, Lab near Greatwall Gardens' },
    { page: 'Lab Services', keywords: 'Clinical Lab Kitengela, Blood tests Athi River, Pathology' },
    { page: 'Ultrasound Scan', keywords: 'Obstetric ultrasound Athi River, Pregnancy scan Kitengela' },
    { page: 'Patient Portal', keywords: 'Test results lookup Icore, Medical fasting instructions' },
    { page: 'About Us', keywords: 'Icore diagnostics mission, Best lab in Kitengela town' }
  ]
};
