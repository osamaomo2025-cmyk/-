
export type UserRole = 'user' | 'supervisor' | 'super_admin' | 'judge' | 'lawyer' | 'prosecutor' | 'office_admin' | 'medical_expert' | 'cyber_expert' | 'prison_admin' | 'intl_liaison' | 'defendant' | 'procurement_officer' | 'researcher' | 'student' | 'developer' | 'medical_council_member' | 'prosecution_head' | 'prison';

export type AccountStatus = 'active' | 'blocked' | 'blocked_enforcement' | 'pending';

export type GoalStatus = 'pending' | 'in_progress' | 'completed';

export type DisciplineStatus = 'exemplary' | 'good' | 'warning' | 'suspended';

export type ResearchType = 'book' | 'manuscript' | 'paper';

export type TenderStatus = 'open' | 'closed' | 'awarded';

export interface ServiceRequest {
  id: string;
  userName: string;
  serviceTitle: string;
  date: string;
  status: 'pending' | 'processing' | 'approved' | 'rejected';
  officeId?: string;
  paymentStatus?: 'paid' | 'unpaid';
  category?: string;
  details?: Record<string, any>;
}

export interface User {
  username: string;
  role: UserRole;
  fullName: string;
  isVerified: boolean;
  profileImage?: string;
  status?: AccountStatus;
  valuationsCount?: number;
  email?: string;
  attendance?: AttendanceRecord[];
  ratings?: any[];
  documents?: UserDocument[];
  enforcementOrder?: any;
}

export interface UserActivity {
  id: string;
  action: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface AttendanceRecord {
  id: string;
  userId: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  locationStatus: 'in_site' | 'out_site';
  coordinates: { lat: number; lng: number };
  verificationType: 'biometric' | 'manual';
}

export interface UserDocument {
  id: string;
  name: string;
  uploadDate: string;
  size: string;
  url?: string;
}

export interface CourtParticipant {
  id: string;
  name: string;
  role: UserRole;
  isCameraOn: boolean;
  isMicOn: boolean;
}

export interface CourtSession {
  id: string;
  caseNumber: string;
  startTime: string;
  participants: CourtParticipant[];
  status: 'scheduled' | 'live' | 'finished';
}

export interface ValuationRecord {
  id: string;
  date: string;
  propertyType: string;
  area: number;
  location: string;
  estimatedValue: number;
  aiAnalysis: string;
  registrationFees: number;
}

export interface LedgerBlock {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  previousHash: string;
  currentHash: string;
}

export interface ForgeryReport {
  isForged: boolean;
  confidenceScore: number;
  anomalies: string[];
  recommendation: string;
}

export interface SimulationState {
  isActive: boolean;
  currentStep: number;
  caseId: string;
  history: string[];
}

export interface ProvincialOffice {
  id: string;
  name: string;
  city: string;
  address: string;
  activeRequestsCount: number;
  managerName: string;
  status: 'online' | 'busy' | 'offline';
  completedToday: number;
}

export interface MeetingGoal {
  id: string;
  description: string;
  status: GoalStatus;
  department: string;
}

export interface Tender {
  id: string;
  title: string;
  category: string;
  budget: number;
  deadline: string;
  status: TenderStatus;
  description: string;
  requirements: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  author: string;
  year: string;
  type: ResearchType;
  category: string;
  description: string;
  isRare: boolean;
}

export interface ScannedDocument {
  title: string;
  category: string;
  issueDate: string;
  parties: string[];
  summary: string;
  confidence: number;
}

export interface ProsecutionCase {
  id: string;
  title: string;
  prosecutorName: string;
  status: 'draft' | 'awaiting_director' | 'approved';
  summary: string;
  legalArticles: string[];
  evidenceQuality: number;
  timestamp: string;
  digitalSeal?: string;
}

/** Added missing types for component compatibility **/

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Administration {
  id: string;
  name: string;
  head: string;
  icon: string;
  description: string;
  responsibilities: string[];
  subUnits: string[];
  linkedServices?: string[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  fee: number | string;
}

export interface SovereignMessage {
  id: string;
  sender: string;
  receiverRole: UserRole;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface AccessLog {
  id: string;
  docId: string;
  viewerName: string;
  timestamp: string;
  location: string;
  ipAddress: string;
  status: 'granted' | 'denied' | 'expired';
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'hearing' | 'appointment' | 'deadline';
  isNotified: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  type: 'bank' | 'wallet';
}

export interface DepartmentBudget {
  deptId: string;
  deptName: string;
  allocated: number;
  spent: number;
  remaining: number;
  performanceScore: number;
}

export interface SovereignFund {
  id: string;
  name: string;
  balance: number;
  purpose: string;
  lastTransaction: string;
}

export interface Heir {
  id: string;
  name: string;
  relation: string;
}

export interface ValuationExpert {
  id: string;
  name: string;
  licenseNumber: string;
  specialty: string;
}

export interface ArchiveRecord extends ServiceRequest {
  archiveDate: string;
  integrityHash: string;
  sealType: string;
}

export interface WalletCard {
  id: string;
  title: string;
  cardNumber: string;
  expiryDate: string;
  type: 'id' | 'deed' | 'license';
  color: string;
  icon: string;
}

export interface LawyerCase {
  id: string;
  caseNumber: string;
  courtName: string;
  clientName: string;
  status: 'scheduled' | 'in_progress' | 'closed' | 'live';
  nextHearing?: string;
  lastUpdate: string;
}

export interface ForensicReport {
  id: string;
  caseNumber: string;
  reportType: string;
  subjectName: string;
  expertName: string;
  status: 'pending' | 'transmitted' | 'completed' | 'awaiting_council';
  integrityHash: string;
  digitalSeal?: string;
  findings: string;
  chainOfCustody: any[];
}

export interface ForensicOrder {
  id: string;
  caseNumber: string;
  judgeName: string;
  orderType: 'autopsy' | 'dna' | 'digital';
  priority: 'urgent' | 'immediate' | 'standard';
  status: 'pending' | 'received' | 'completed' | 'awaiting_council';
  requiresCouncilApproval: boolean;
  timestamp: string;
}

export interface InternationalTreaty {
  id: string;
  country: string;
  type: 'extradition' | 'criminal_aid';
  status: 'active' | 'expired' | 'pending';
  signedDate: string;
  documentUrl: string;
}

export interface InmateRecord {
  id: string;
  fullName: string;
  offense: string;
  sentenceExpiry: string;
  rehabProgress: number;
  status: 'detained' | 'released' | 'in_transit';
  isEligibleForPardon: boolean;
  verdictId?: string;
  receiptConfirmedBy?: string;
}

export interface StatePerformance {
  id: string;
  name: string;
  efficiency: number;
  casesResolved: number;
  trend: 'up' | 'down' | 'stable';
  satisfaction: number;
  staffCount: number;
}

export interface PersonnelRecord {
  id: string;
  fullName: string;
  role: string;
  department: string;
  performanceScore: number;
  disciplineStatus: DisciplineStatus;
  attendanceRate: number;
  casesClosed?: number;
  lastPromotionDate: string;
  payroll?: {
    basicSalary: number;
    allowances: number;
    deductions: number;
    netSalary: number;
    lastPaymentDate: string;
    taxId: string;
  };
}

export interface Vendor {
  id: string;
  name: string;
  rating: number;
  category: string;
}

export interface LogisticsOrder {
  id: string;
  item: string;
  quantity: number;
  status: string;
}

export interface JudicialSimulation {
  id: string;
  title: string;
  caseType: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'live' | 'upcoming' | 'archived';
  participantsCount: number;
  duration: string;
  mentor: string;
}

export interface StudentProgress {
  id: string;
  studentName: string;
  completedSimulations: number;
  xpPoints: number;
  currentRank: string;
  badges: string[];
}

export interface PublicConsultation {
  id: string;
  lawTitle: string;
  description: string;
  deadline: string;
  responsesCount: number;
  status: 'open' | 'closed';
}

export interface ProjectRecord {
  id: string;
  title: string;
  location: string;
  status: 'under_construction' | 'planning' | 'completed';
  developerName: string;
  unitsCount: number;
  investmentVolume: number;
}
