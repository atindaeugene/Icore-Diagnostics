
export enum BranchId {
  ATHI_RIVER = 'ATHI_RIVER',
  KITENGELA = 'KITENGELA'
}

export interface BranchInfo {
  id: BranchId;
  name: string;
  address: string;
  description: string;
  hours: string;
  phone: string;
}

export interface Service {
  title: string;
  description: string;
  category: 'LAB' | 'ULTRASOUND';
  icon: string;
}

export interface TestResult {
  id: string;
  patientName: string;
  status: 'PENDING' | 'READY' | 'NOT_FOUND';
  testDate: string;
  message?: string;
}
