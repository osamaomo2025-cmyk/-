
import React from 'react';

export const ScaleIcon = ({ hideBackground, className }: { hideBackground?: boolean, className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

export const AppraiserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const SERVICES = [
  { id: 'f_01', title: 'توثيق عقد زواج', icon: '💍', category: 'judicial_family', fee: 2000, description: 'توثيق رسمي لعقود الزواج مع الربط بالسجل المدني.', formFields: [{id:'h_name', label:'اسم الزوج', type:'text'}, {id:'w_name', label:'اسم الزوجة', type:'text'}] },
  { id: 'f_17', title: 'حصر ورثة (تركات)', icon: '⚖️', category: 'judicial_family', fee: 5000, description: 'بدء إجراءات حصر وتحديد الورثة الشرعيين.', formFields: [{id:'dec_name', label:'اسم المتوفى', type:'text'}] },
  { id: 'r1', title: 'شهادة بحث ملكية', icon: '🏠', category: 'realestate', fee: 5000, description: 'استخراج شهادة بحث فورية وموثقة من السجل القومي.', formFields: [{ id: 'plot_id', label: 'رقم القطعة والمربع', type: 'text' }] },
  { id: 'c1', title: 'تأسيس شركة محدودة', icon: '🏢', category: 'commercial', fee: 25000, description: 'بدء إجراءات تسجيل شركة جديدة لدى المسجل التجاري.', formFields: [{ id: 'co_name', label: 'الاسم المقترح', type: 'text' }] },
  { id: 'p_01', title: 'فتح بلاغ إلكتروني', icon: '🚨', category: 'prosecution', fee: 0, description: 'تقديم بلاغ جنائي أولي للنيابة المختصة.', formFields: [{ id: 'incident', label: 'تفاصيل البلاغ', type: 'textarea' }] }
];

export const ADMINISTRATIONS = [
  { id: 'adm_leg', name: 'إدارة التشريع والصياغة', head: 'المستشار العام للتشريع', icon: '📜', description: 'صياغة القوانين ومراجعة العقود الحكومية.', responsibilities: ['الصياغة القانونية', 'الاتفاقيات الدولية'], subUnits: ['وحدة المعاهدات'] },
  { id: 'adm_land', name: 'السجل العقاري العام', head: 'المسجل العام للأراضي', icon: '🏠', description: 'حماية الملكية العقارية في كافة السودان.', responsibilities: ['تسجيل الأراضي', 'إصدار شهادات البحث'], subUnits: ['المساحة', 'التوثيق العقاري'] },
  { id: 'adm_pros', name: 'النيابة العامة', head: 'النائب العام المكلف', icon: '⚖️', description: 'حارس العدالة الجنائية والتحقيق الميداني.', responsibilities: ['التحري', 'الادعاء العام'], subUnits: ['نيابة المعلوماتية'] }
];

export const LATEST_NEWS = [
  { title: 'وزير العدل يعتمد نظام التوقيع الرقمي الموحد 2024' },
  { title: 'افتتاح مكتب المسجل التجاري الذكي بمدينة بورتسودان' },
  { title: 'إطلاق حاسبة المواريث الذكية لخدمة المواطنين' }
];

export const LEGISLATIONS = [
  { id: 'leg_01', title: 'قانون المعاملات المدنية', year: '1984', category: 'civil', description: 'ينظم الحقوق والالتزامات المدنية الأساسية.' },
  { id: 'leg_02', title: 'قانون الإجراءات الجنائية', year: '1991', category: 'criminal', description: 'يحدد القواعد الإجرائية للتحقيق والمحاكمة.' }
];

export const RECORD_MANAGEMENT_STEPS = [
  { id: 'step_1', label: 'الاستلام والتحقق الأولي' },
  { id: 'step_2', label: 'المراجعة الفنية' },
  { id: 'step_3', label: 'التوقيع والاعتماد' }
];

export const LOCATION_DATA = {
  'الخرطوم': { 'الخرطوم': ['المنشية', 'الرياض'], 'الخرطوم بحري': ['كافوري', 'الصافية'] },
  'البحر الأحمر': { 'بورتسودان': ['حي المطار', 'وسط المدينة'] }
};

export const REAL_ESTATE_MARKET_DATA: Record<string, { residential: number }> = {
  'المنشية': { residential: 850000 },
  'كافوري': { residential: 650000 },
  'default': { residential: 350000 }
};

export const REAL_ESTATE_TICKERS = [
  { location: 'المنشية', residential: 850000 },
  { location: 'كافوري', residential: 650000 }
];

export const PAYMENT_METHODS = [
  { id: 'bok', name: 'بنك الخرطوم (BOK)', icon: '🏦', type: 'bank' },
  { id: 'syber', name: 'سايبر باي (SyberPay)', icon: '📱', type: 'wallet' }
];

export const PROVINCIAL_OFFICES = [
  { id: 'OFF-01', name: 'مكتب الخرطوم الرئيسي', city: 'الخرطوم', address: 'برج العدل', activeRequestsCount: 124, managerName: 'عمر الصديق', status: 'online', completedToday: 45 },
  { id: 'OFF-02', name: 'مكتب بورتسودان الولائي', city: 'بورتسودان', address: 'وسط المدينة', activeRequestsCount: 56, managerName: 'أحمد يوسف', status: 'online', completedToday: 22 }
];

export const SUDANESE_UNIVERSITIES = ['جامعة الخرطوم', 'جامعة النيلين', 'جامعة السودان'];

export const PROCEDURAL_ALERTS = [
  { id: 'A1', type: 'deadline', priority: 'high', title: 'تجديد السجل التجاري', content: 'تنتهي مهلة التجديد في 31 يونيو الحالي.', actionLabel: 'تجديد الآن', targetServiceId: 'c1' }
];

export const FORGERY_CASE_DETAILS = {
  title: 'قضية تزوير صك ملكية (محاكاة)',
  facts: 'رصد تلاعب في بيانات صك عقاري بمنطقة المنشية.',
  roles: [
    { id: 'cyber_expert', label: 'خبير أدلة', icon: '🔬' },
    { id: 'prosecutor', label: 'وكيل نيابة', icon: '⚖️' },
    { id: 'lawyer', label: 'محامي دفاع', icon: '💼' },
    { id: 'judge', label: 'مولانا القاضي', icon: '🏛️' }
  ]
};

export const COURT_CITIES = ['الخرطوم', 'بورتسودان', 'ود مدني'];
export const COURTS_DATA: Record<string, any[]> = {
  'الخرطوم': [{ id: 'K1', name: 'محكمة الخرطوم شمال الكلية', type: 'جنائية', address: 'شارع القصر' }]
};
export const COURT_HIERARCHY: Record<string, any[]> = {
  'المحاكم العامة والجزئية': [{ id: 'C1', name: 'محكمة الخرطوم وسط', address: 'شارع الجامعة' }]
};
