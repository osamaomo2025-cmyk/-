
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import QuickLinks from './components/QuickLinks.tsx';
import Sidebar from './components/Sidebar.tsx';
import Footer from './components/Footer.tsx';
import AuthModal from './components/AuthModal.tsx';
import SplashScreen from './components/SplashScreen.tsx';
import LegalAssistant from './components/LegalAssistant.tsx';
import NewsTicker from './components/NewsTicker.tsx';
import DigitalTransformation from './components/DigitalTransformation.tsx';
import LawBook from './components/LawBook.tsx';
import Departments from './components/Departments.tsx';
import CourtsByCity from './components/CourtsByCity.tsx';
import MediaCenter from './components/MediaCenter.tsx';
import LandRegistrationSection from './components/LandRegistrationSection.tsx';
import CommercialRegistrarSection from './components/CommercialRegistrarSection.tsx';
import FamilyJudiciarySection from './components/FamilyJudiciarySection.tsx';
import ForensicDepartment from './components/ForensicDepartment.tsx';
import UserProfile from './components/UserProfile.tsx';
import SuperAdminDashboard from './components/SuperAdminDashboard.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import JudgeDashboard from './components/JudgeDashboard.tsx';
import LawyerPortal from './components/LawyerPortal.tsx';
import ServiceModal from './components/ServiceModal.tsx';
import SmartValuationEngine from './components/SmartValuationEngine.tsx';
import AuctionsPortal from './components/AuctionsPortal.tsx';
import BiddingRoom from './components/BiddingRoom.tsx';
import RequestTracking from './components/RequestTracking.tsx';
import VirtualCourtroom from './components/VirtualCourtroom.tsx';
import SMSPreview from './components/SMSPreview.tsx';
import CourtsHierarchy from './components/CourtsHierarchy.tsx';
import JudicialAcademy from './components/JudicialAcademy.tsx';
import EnforcementBlockScreen from './components/EnforcementBlockScreen.tsx';
import SimulationHub from './components/SimulationHub.tsx';
import SimulationController from './components/SimulationController.tsx';
import RealEstateExchange from './components/RealEstateExchange.tsx';
import ProcurementManagement from './components/ProcurementManagement.tsx';
import ResearchCenter from './components/ResearchCenter.tsx';
import ExternalVerification from './components/ExternalVerification.tsx';
import SovereignShield from './components/SovereignShield.tsx';
import ProsecutionSection from './components/ProsecutionSection.tsx';
import PrisonManagement from './components/PrisonManagement.tsx';
import FamilyRealEstateEngine from './components/FamilyRealEstateEngine.tsx';
import MedicalCouncilPortal from './components/MedicalCouncilPortal.tsx';
import ProsecutionInternalPortal from './components/ProsecutionInternalPortal.tsx';
import { User, CourtSession, SimulationState, ServiceRequest } from './types.ts';
import { secureRetrieve, secureStore } from './services/encryption.ts';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('main'); 
  const [user, setUser] = useState<User | null>(null);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeService, setActiveService] = useState<any>(null);
  const [activeCourtSession, setActiveCourtSession] = useState<CourtSession | null>(null);
  const [smsMessage, setSmsMessage] = useState<string | null>(null);
  const [isSystemIsolated, setIsSystemIsolated] = useState(false);
  
  const [sim, setSim] = useState<SimulationState>({ isActive: false, currentStep: 0, caseId: 'CASE-SD-2026', history: [] });

  // Persistence: Load all sovereign data on mount
  useEffect(() => {
    const savedUser = secureRetrieve('active_user');
    const savedRequests = secureRetrieve('service_requests');
    if (savedUser) setUser(savedUser);
    if (savedRequests) setRequests(savedRequests);
    else {
        // Initial Mock Data if storage is empty
        setRequests([
            { id: 'REF-9921', userName: 'ياسر عمر الطيب', serviceTitle: 'شهادة بحث ملكية', date: '2024-05-28', status: 'approved', category: 'realestate' }
        ]);
    }

    const handleView = (e: any) => { setView(e.detail); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    const handleIsolation = (e: any) => setIsSystemIsolated(e.detail);
    const handleSms = (e: any) => setSmsMessage(e.detail);
    const handleStartSim = () => setSim({ ...sim, isActive: true, currentStep: 1 });

    window.addEventListener('changeView', handleView);
    window.addEventListener('systemIsolation', handleIsolation);
    window.addEventListener('sendSMS', handleSms);
    window.addEventListener('startSimulation', handleStartSim);
    
    return () => {
      window.removeEventListener('changeView', handleView);
      window.removeEventListener('systemIsolation', handleIsolation);
      window.removeEventListener('sendSMS', handleSms);
      window.removeEventListener('startSimulation', handleStartSim);
    };
  }, [sim]);

  // Sync state with storage on every change
  useEffect(() => {
    if (requests.length > 0) secureStore('service_requests', requests);
  }, [requests]);

  const handleUpdateStatus = (id: string, newStatus: ServiceRequest['status']) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    window.dispatchEvent(new CustomEvent('sendSMS', { detail: `تنبيه سيادي: تم تحديث حالة طلبك #${id} إلى (${newStatus === 'approved' ? 'مكتمل' : 'قيد المعالجة'}).` }));
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    secureStore('active_user', userData);
    setIsAuthOpen(false);
    
    // Intelligent role-based redirection
    if (userData.role === 'super_admin') setView('admin');
    else if (userData.role === 'supervisor' || userData.role === 'office_admin') setView('supervisor_dashboard');
    else if (userData.role === 'judge') setView('judge_portal');
    else if (userData.role === 'lawyer') setView('lawyer_portal');
    else if (userData.role === 'medical_council_member') setView('medical_portal');
    else if (userData.role === 'prosecutor') setView('prosecution_portal');
    else setView('main');
  };

  const renderView = () => {
    if (user?.status === 'blocked_enforcement') return <EnforcementBlockScreen user={user} onLogout={() => { setUser(null); localStorage.removeItem('moj_sd_active_user'); setView('main'); }} />;
    
    if (sim.isActive) {
        return <SimulationHub sim={sim} user={user} onCompleteStep={(next) => setSim({...sim, currentStep: next})} onAuthRequired={() => setIsAuthOpen(true)} onStartCourtSession={setActiveCourtSession} />;
    }

    if (activeCourtSession && user) return <VirtualCourtroom session={activeCourtSession} currentUser={user} onExit={() => setActiveCourtSession(null)} />;

    switch (view) {
      case 'main': 
        return (
          <>
            <Hero onSearch={() => {}} searchQuery="" onCategorySelect={(cat) => setView(cat)} />
            <NewsTicker />
            <QuickLinks onNavigate={(v) => setView(v)} />
            <Services onServiceClick={setActiveService} />
            <Departments onStartService={setActiveService} />
            <LawBook />
            <CourtsByCity />
            <div className="bg-justice-accent/20 py-16"><MediaCenter /></div>
            <DigitalTransformation />
          </>
        );
      
      case 'supervisor_dashboard':
        return user ? <AdminDashboard user={user} requests={requests} onUpdateStatus={handleUpdateStatus} /> : null;
      case 'admin':
        return user?.role === 'super_admin' ? <SuperAdminDashboard user={user} /> : null;
      case 'judge_portal':
        return user ? <JudgeDashboard user={user} onStartSession={setActiveCourtSession} /> : null;
      case 'lawyer_portal':
        return user ? <LawyerPortal user={user} /> : null;
      case 'medical_portal':
        return <MedicalCouncilPortal onExit={() => setView('main')} />;
      case 'prosecution_portal':
        return <ProsecutionInternalPortal user={user!} onExit={() => setView('main')} />;
      
      case 'legislation': return <div className="py-20 space-y-24"><LawBook /><ResearchCenter /></div>;
      case 'lands': return <LandRegistrationSection onStartService={setActiveService} />;
      case 'commercial': return <CommercialRegistrarSection onStartService={setActiveService} onManageOffice={() => setView('supervisor_dashboard')} />;
      case 'prosecution': return <ProsecutionSection onStartService={setActiveService} />;
      case 'forensic': return <div className="py-20 px-6"><ForensicDepartment /></div>;
      case 'prisons': return <div className="py-20 px-6"><PrisonManagement isManagementView={true} /></div>;
      case 'courts_general': return <CourtsHierarchy onStartService={setActiveService} initialView="general" />;
      case 'courts_family': return <FamilyJudiciarySection onStartService={setActiveService} onOpenCalculator={() => setView('inheritance_calc')} />;
      case 'inheritance_calc': return <FamilyRealEstateEngine />;
      case 'tracking': return <RequestTracking onExit={() => setView('main')} />;
      case 'performance': return <RealEstateExchange />;
      case 'academy': return <div className="py-12"><JudicialAcademy /></div>;
      case 'profile': return user ? <UserProfile user={user} onUpdateUser={setUser} /> : null;
      case 'media_center': return <MediaCenter />;
      case 'verification': return <ExternalVerification onExit={() => setView('main')} />;
      case 'auctions': return <AuctionsPortal isAppraisalUnlocked={true} onJoinAuction={() => setView('bidding')} />;
      case 'bidding': return <BiddingRoom auctionId="AUC-772" user={user || {fullName:'زائر', role:'user', username:'guest', isVerified:false}} onExit={() => setView('auctions')} />;

      default: return <div className="py-40 text-center"><button onClick={() => setView('main')} className="px-12 py-4 bg-justice-primary text-white rounded-2xl shadow-xl">العودة للرئيسية</button></div>;
    }
  };

  if (loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <SovereignShield>
      <div className={`min-h-screen flex flex-col font-cairo transition-all duration-1000 ${isSystemIsolated ? 'bg-red-950 grayscale-[0.8]' : 'bg-white'}`}>
        {isSystemIsolated && (
          <div className="fixed inset-0 z-[2000] flex flex-col items-center justify-center text-white bg-red-950/90 backdrop-blur-3xl animate-in fade-in">
             <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-6xl shadow-[0_0_100px_#dc2626] animate-pulse mb-8 border-4 border-white/20">🔐</div>
             <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">النظام في وضع العزل السيادي</h2>
             <p className="text-red-200 font-tajawal max-w-md text-center leading-relaxed">
                تم تفعيل بروتوكول الحماية القصوى. كافة الخدمات العامة متوقفة مؤقتاً لأسباب أمنية قومية.
             </p>
          </div>
        )}

        {smsMessage && <SMSPreview message={smsMessage} onClose={() => setSmsMessage(null)} />}
        
        <Header 
          user={user} 
          onLoginClick={() => setIsAuthOpen(true)} 
          onLogout={() => { setUser(null); localStorage.removeItem('moj_sd_active_user'); setView('main'); }} 
          view={view} 
          setView={setView} 
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} view={view} setView={setView} />
        
        <main className={`flex-grow pt-24 min-h-[70vh] relative transition-all duration-500 ${isSidebarOpen ? 'lg:mr-72' : 'lg:mr-0'}`}>
            <div className={`animate-in fade-in duration-1000 ${isSystemIsolated ? 'pointer-events-none opacity-50' : ''}`}>
              {renderView()}
            </div>
        </main>
        
        <Footer onLinkClick={(v) => setView(v)} />
        <LegalAssistant />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLoginSuccess={handleLogin} />
        
        {activeService && (
          <ServiceModal 
              service={activeService} 
              onClose={() => setActiveService(null)} 
              onComplete={(formData) => { 
                  const refId = `REF-${Math.floor(10000 + Math.random() * 90000)}`; 
                  const newReq: ServiceRequest = {
                    id: refId,
                    userName: user?.fullName || 'مواطن سيادي',
                    serviceTitle: activeService.title,
                    date: new Date().toLocaleDateString('en-CA'),
                    status: 'pending',
                    category: activeService.category || 'general'
                  };
                  setRequests(prev => [newReq, ...prev]);
                  window.dispatchEvent(new CustomEvent('sendSMS', { detail: `تم اعتماد طلبك (${activeService.title}) بنجاح. رقم المرجع: ${refId}.` }));
                  setActiveService(null); 
              }} 
          />
        )}
      </div>
    </SovereignShield>
  );
};

export default App;
