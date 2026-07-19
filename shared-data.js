// ================================================================
// NANDIKA CENTRAL DATA HUB - Complete Interconnected Ecosystem
// Version: 2.0 | All 26 Tiles Connected | Earning Module Removed
// ================================================================

const NandikaDataHub = {
    // ---- SYSTEM STATUS ----
    version: '2.0',
    lastUpdated: '2026-07-19',
    totalTiles: 26,
    activeUsers: 0,
    totalPartners: 0,

    // ============================================================
    // 1. EDUCATION TILE DATA
    // ============================================================
    education: {
        streams: {
            medical: {
                id: 'stream-medical',
                name: 'Medical (PCB)',
                icon: '🩺',
                description: 'Doctor, Dentist, Ayurveda, Homeopathy, etc.',
                careers: ['MBBS', 'BDS', 'BAMS', 'BHMS', 'BPT', 'B.Sc Nursing', 'BVSc'],
                exams: ['EXAM-001', 'EXAM-003', 'EXAM-007'],
                colleges: ['CLG-001', 'CLG-002', 'CLG-003', 'CLG-004', 'CLG-005'],
                scholarships: ['SCH-001', 'SCH-003', 'SCH-004'],
                studyMaterials: ['SM-001', 'SM-002', 'SM-003'],
                mockTests: ['MT-001', 'MT-002'],
                jobs: ['JOB-001', 'JOB-002', 'JOB-003']
            },
            nonMedical: {
                id: 'stream-nonmedical',
                name: 'Non-Medical (PCM)',
                icon: '⚛️',
                description: 'Engineering, Architecture, Technology, etc.',
                careers: ['B.Tech', 'B.E.', 'B.Arch', 'B.Sc IT'],
                exams: ['EXAM-002', 'EXAM-004', 'EXAM-008'],
                colleges: ['CLG-101', 'CLG-102', 'CLG-103', 'CLG-104'],
                scholarships: ['SCH-001', 'SCH-005'],
                studyMaterials: ['SM-004', 'SM-005'],
                mockTests: ['MT-003', 'MT-004'],
                jobs: ['JOB-004', 'JOB-005']
            },
            commerce: {
                id: 'stream-commerce',
                name: 'Commerce',
                icon: '💰',
                description: 'CA, CS, CMA, B.Com, MBA, etc.',
                careers: ['CA', 'CS', 'CMA', 'B.Com', 'MBA', 'BBA'],
                exams: ['EXAM-009', 'EXAM-010', 'EXAM-011'],
                colleges: ['CLG-201', 'CLG-202', 'CLG-203'],
                scholarships: ['SCH-001', 'SCH-006'],
                studyMaterials: ['SM-006', 'SM-007'],
                mockTests: ['MT-005'],
                jobs: ['JOB-006', 'JOB-007']
            },
            arts: {
                id: 'stream-arts',
                name: 'Arts/Humanities',
                icon: '🎭',
                description: 'Journalism, Psychology, Sociology, etc.',
                careers: ['BA', 'MA', 'B.Ed', 'Journalism'],
                exams: ['EXAM-003', 'EXAM-012'],
                colleges: ['CLG-301', 'CLG-302'],
                scholarships: ['SCH-001'],
                studyMaterials: ['SM-008'],
                jobs: ['JOB-008', 'JOB-009']
            },
            sports: {
                id: 'stream-sports',
                name: 'Sports',
                icon: '🏅',
                description: 'Physical Education, Sports Management, etc.',
                careers: ['B.P.Ed', 'M.P.Ed', 'Sports Management'],
                exams: ['EXAM-013'],
                colleges: ['CLG-401', 'CLG-402'],
                scholarships: ['SCH-007'],
                studyMaterials: ['SM-009'],
                jobs: ['JOB-010']
            },
            agriculture: {
                id: 'stream-agriculture',
                name: 'Agriculture',
                icon: '🌱',
                description: 'B.Sc Agriculture, Horticulture, Forestry, etc.',
                careers: ['B.Sc Agri', 'M.Sc Agri', 'MBA Agri Business'],
                exams: ['EXAM-014'],
                colleges: ['CLG-501', 'CLG-502'],
                scholarships: ['SCH-008'],
                studyMaterials: ['SM-010'],
                jobs: ['JOB-011']
            },
            artist: {
                id: 'stream-artist',
                name: 'Artist/Performing Arts',
                icon: '🎨',
                description: 'Dance, Music, Theater, Fine Arts, etc.',
                careers: ['BFA', 'B.Music', 'B.Theater'],
                exams: ['EXAM-015'],
                colleges: ['CLG-601', 'CLG-602'],
                scholarships: ['SCH-009'],
                studyMaterials: ['SM-011'],
                jobs: ['JOB-012']
            },
            design: {
                id: 'stream-design',
                name: 'Design/Fashion',
                icon: '👗',
                description: 'Fashion Design, Interior Design, etc.',
                careers: ['B.Des', 'B.Fashion', 'B.Interior'],
                exams: ['EXAM-016', 'EXAM-017'],
                colleges: ['CLG-701', 'CLG-702'],
                scholarships: ['SCH-010'],
                studyMaterials: ['SM-012'],
                jobs: ['JOB-013']
            },
            skilled: {
                id: 'stream-skilled',
                name: 'Skilled/Vocational',
                icon: '🔧',
                description: 'ITI, Diploma, Skill-based courses',
                careers: ['ITI', 'Diploma', 'Skill Certificate'],
                exams: ['EXAM-018'],
                colleges: ['CLG-801', 'CLG-802'],
                scholarships: ['SCH-011'],
                studyMaterials: ['SM-013'],
                jobs: ['JOB-014', 'JOB-015']
            },
            abroad: {
                id: 'stream-abroad',
                name: 'International/Abroad',
                icon: '🌍',
                description: 'Study abroad, Global education',
                careers: ['MBBS Abroad', 'MS Abroad', 'MBA Abroad'],
                exams: ['EXAM-019', 'EXAM-020'],
                colleges: ['CLG-901', 'CLG-902'],
                scholarships: ['SCH-012'],
                studyMaterials: ['SM-014'],
                jobs: ['JOB-016']
            }
        },

        userTypes: {
            student: {
                id: 'user-student',
                name: 'Student',
                icon: '🎓',
                access: ['education', 'exams', 'application_forms', 'study_materials', 'mock_test', 'scholarships', 'colleges', 'jobs']
            },
            dropper: {
                id: 'user-dropper',
                name: 'Dropper',
                icon: '🔄',
                access: ['education', 'exams', 'mock_test', 'study_materials', 'results', 'motivation']
            },
            graduate: {
                id: 'user-graduate',
                name: 'Graduate',
                icon: '🎓',
                access: ['education', 'exams', 'jobs', 'study_materials', 'scholarships', 'abroad']
            },
            postGraduate: {
                id: 'user-postgraduate',
                name: 'Post Graduate',
                icon: '🧠',
                access: ['education', 'exams', 'jobs', 'research', 'teaching']
            },
            jobSwitcher: {
                id: 'user-jobswitcher',
                name: 'Job Switcher',
                icon: '💼',
                access: ['jobs', 'study_materials', 'mock_test', 'business', 'automation']
            },
            professional: {
                id: 'user-professional',
                name: 'Professional',
                icon: '⚕️',
                access: ['education', 'exams', 'jobs', 'business', 'services']
            },
            entrepreneur: {
                id: 'user-entrepreneur',
                name: 'Entrepreneur',
                icon: '🧑‍💼',
                access: ['business', 'sponsorship_internship', 'schemes', 'budget', 'services']
            },
            mentor: {
                id: 'user-mentor',
                name: 'Mentor',
                icon: '👨‍🏫',
                access: 'ALL', // Full access to all tiles
                canRespond: true,
                canGuide: true
            },
            partner: {
                id: 'user-partner',
                name: 'Partner',
                icon: '🤝',
                access: ['jobs', 'sponsorship_internship', 'services', 'our_channels'],
                canListJobs: true,
                canProvideServices: true
            }
        }
    },

    // ============================================================
    // 2. EXAMS TILE DATA
    // ============================================================
    exams: {
        'EXAM-001': {
            id: 'EXAM-001',
            name: 'NEET-UG',
            fullName: 'National Eligibility cum Entrance Test - UG',
            category: 'Medical',
            level: 'National',
            conductingBody: 'NTA',
            officialWebsite: 'https://neet.nta.nic.in/',
            applicationForm: 'FORM-001',
            examDate: '2026-05-03',
            applicationStart: '2026-02-01',
            applicationEnd: '2026-02-28',
            resultDate: '2026-06-15',
            eligibility: {
                age: '17-25 years',
                qualification: '12th with PCB',
                marks: 'General: 50%, SC/ST: 40%',
                subjects: ['Physics', 'Chemistry', 'Biology/Biotechnology']
            },
            examPattern: {
                mode: 'Offline (Pen & Paper)',
                duration: '3 hours 20 minutes',
                sections: ['Physics (45)', 'Chemistry (45)', 'Biology (90)'],
                totalMarks: 720,
                marking: '+4 for correct, -1 for incorrect'
            },
            cutoffHistory: {
                '2025': { general: 720, obc: 715, sc: 690, st: 680 },
                '2024': { general: 718, obc: 712, sc: 688, st: 675 }
            },
            colleges: ['CLG-001', 'CLG-002', 'CLG-003', 'CLG-004', 'CLG-005'],
            scholarships: ['SCH-001', 'SCH-003', 'SCH-004'],
            studyMaterials: ['SM-001', 'SM-002', 'SM-003'],
            mockTests: ['MT-001', 'MT-002'],
            results: ['RES-001'],
            examCities: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru', 'Hyderabad', 'Pune', 'Ahmedabad']
        },
        'EXAM-002': {
            id: 'EXAM-002',
            name: 'JEE Main',
            fullName: 'Joint Entrance Examination Main',
            category: 'Engineering',
            level: 'National',
            conductingBody: 'NTA',
            officialWebsite: 'https://jeemain.nta.nic.in/',
            applicationForm: 'FORM-002',
            examDate: '2026-04-15',
            applicationStart: '2025-12-15',
            applicationEnd: '2026-01-15',
            resultDate: '2026-05-15',
            eligibility: {
                age: 'No age limit',
                qualification: '12th with PCM',
                marks: 'General: 75%, SC/ST: 65%',
                subjects: ['Physics', 'Chemistry', 'Mathematics']
            },
            examPattern: {
                mode: 'Online (Computer Based)',
                duration: '3 hours',
                sections: ['Physics', 'Chemistry', 'Mathematics'],
                totalMarks: 300,
                marking: '+4 for correct, -1 for incorrect'
            },
            cutoffHistory: {
                '2025': { general: 95, obc: 92, sc: 88, st: 85 },
                '2024': { general: 93, obc: 90, sc: 86, st: 82 }
            },
            colleges: ['CLG-101', 'CLG-102', 'CLG-103', 'CLG-104'],
            scholarships: ['SCH-001', 'SCH-005'],
            studyMaterials: ['SM-004', 'SM-005'],
            mockTests: ['MT-003', 'MT-004'],
            results: ['RES-002']
        },
        'EXAM-003': {
            id: 'EXAM-003',
            name: 'CUET-UG',
            fullName: 'Central Universities Entrance Test - UG',
            category: 'All',
            level: 'National',
            conductingBody: 'NTA',
            officialWebsite: 'https://cuet.nta.nic.in/',
            applicationForm: 'FORM-003',
            examDate: '2026-06-15',
            applicationStart: '2026-04-01',
            applicationEnd: '2026-05-15',
            resultDate: '2026-07-15',
            eligibility: {
                age: 'No age limit',
                qualification: '12th pass',
                marks: 'Varies by university',
                subjects: ['Domain specific']
            },
            examPattern: {
                mode: 'Online (Computer Based)',
                duration: '3 hours',
                sections: ['Domain', 'Language', 'General'],
                totalMarks: 800,
                marking: '+5 for correct, -1 for incorrect'
            },
            colleges: ['CLG-301', 'CLG-302', 'CLG-201', 'CLG-202'],
            scholarships: ['SCH-001'],
            studyMaterials: ['SM-008', 'SM-006'],
            results: ['RES-003']
        },
        'EXAM-004': {
            id: 'EXAM-004',
            name: 'GATE',
            fullName: 'Graduate Aptitude Test in Engineering',
            category: 'Engineering',
            level: 'National',
            conductingBody: 'IIT',
            officialWebsite: 'https://gate.iitm.ac.in/',
            applicationForm: 'FORM-004',
            examDate: '2026-02-15',
            applicationStart: '2025-09-01',
            applicationEnd: '2025-10-15',
            resultDate: '2026-03-15',
            eligibility: {
                age: 'No age limit',
                qualification: 'Graduation in Engineering',
                marks: 'General: 50%, SC/ST: 45%',
                subjects: ['Engineering Mathematics', 'Core Subject']
            },
            examPattern: {
                mode: 'Online (Computer Based)',
                duration: '3 hours',
                sections: ['General Aptitude', 'Core Subject'],
                totalMarks: 100,
                marking: '+1/-0.33 for MCQ, +2 for Numerical'
            },
            colleges: ['CLG-101', 'CLG-102'],
            scholarships: ['SCH-005'],
            studyMaterials: ['SM-005'],
            results: ['RES-004']
        },
        'EXAM-005': {
            id: 'EXAM-005',
            name: 'AIIMS PG',
            fullName: 'AIIMS Post Graduate Entrance',
            category: 'Medical',
            level: 'National',
            conductingBody: 'AIIMS',
            officialWebsite: 'https://www.aiims.edu/',
            applicationForm: 'FORM-005',
            examDate: '2026-06-01',
            applicationStart: '2026-04-01',
            applicationEnd: '2026-05-01',
            resultDate: '2026-07-01',
            eligibility: {
                age: 'No age limit',
                qualification: 'MBBS',
                marks: 'General: 55%, SC/ST: 50%',
                subjects: ['Pre-clinical', 'Para-clinical', 'Clinical']
            },
            examPattern: {
                mode: 'Online (Computer Based)',
                duration: '3 hours',
                sections: ['Pre-clinical', 'Para-clinical', 'Clinical'],
                totalMarks: 200,
                marking: '+1 for correct, -0.33 for incorrect'
            },
            colleges: ['CLG-001', 'CLG-002'],
            scholarships: ['SCH-004'],
            studyMaterials: ['SM-015'],
            results: ['RES-005']
        }
    },

    // ============================================================
    // 3. COLLEGES TILE DATA
    // ============================================================
    colleges: {
        'CLG-001': {
            collegeId: 'CLG-001',
            title: 'AIIMS Delhi',
            category: 'Medical College',
            stream: 'Medical',
            state: 'Delhi',
            locationType: 'Urban',
            city: 'New Delhi',
            district: 'South Delhi',
            latitude: 28.5672,
            longitude: 77.2100,
            ownership: 'Government',
            nmcRecognition: 'Yes',
            naacGrade: 'A++',
            courses: ['MBBS', 'MD', 'MS', 'DM', 'MCh', 'B.Sc Nursing'],
            entranceExamIds: ['EXAM-001', 'EXAM-005'],
            seats: 125,
            cutoffData: { general: 720, obc: 715, sc: 690, st: 680 },
            ranking: 1,
            fees: { mbbs: 16256, md: 20456, dm: 30456 },
            hospital: 'AIIMS Hospital',
            attachedHospitalCapacity: 2500,
            hostel: 'Yes',
            bondPolicy: 'No Bond',
            officialWebsite: 'https://www.aiims.edu/',
            officialSource: 'https://www.aiims.edu/en/',
            academicYear: '2026-27',
            verificationStatus: 'Verified',
            lastUpdated: '2026-07-19',
            images: ['aiims1.jpg', 'aiims2.jpg'],
            contact: {
                phone: '011-26588500',
                email: 'admissions@aiims.edu',
                address: 'Ansari Nagar, New Delhi-110029'
            },
            facilities: ['Library', 'Hostel', 'Hospital', 'Research Labs', 'Sports Complex'],
            studentReviews: [
                { name: 'Rahul K.', rating: 4.8, comment: 'Best medical college in India' },
                { name: 'Priya M.', rating: 4.7, comment: 'Excellent faculty and infrastructure' }
            ]
        },
        'CLG-002': {
            collegeId: 'CLG-002',
            title: 'CMC Vellore',
            category: 'Medical College',
            stream: 'Medical',
            state: 'Tamil Nadu',
            locationType: 'Urban',
            city: 'Vellore',
            district: 'Vellore',
            latitude: 12.9165,
            longitude: 79.1325,
            ownership: 'Private',
            nmcRecognition: 'Yes',
            naacGrade: 'A++',
            courses: ['MBBS', 'MD', 'MS', 'DM', 'MCh', 'BDS', 'B.Sc Nursing'],
            entranceExamIds: ['EXAM-001', 'EXAM-006'],
            seats: 100,
            cutoffData: { general: 710, obc: 700, sc: 680, st: 670 },
            ranking: 2,
            fees: { mbbs: 250000, md: 350000, dm: 450000 },
            hospital: 'CMC Hospital',
            attachedHospitalCapacity: 2600,
            hostel: 'Yes',
            bondPolicy: '1 Year Bond',
            officialWebsite: 'https://www.cmcvellore.ac.in/',
            officialSource: 'https://www.cmcvellore.ac.in/',
            academicYear: '2026-27',
            verificationStatus: 'Verified',
            lastUpdated: '2026-07-19',
            contact: {
                phone: '0416-2281000',
                email: 'admissions@cmcvellore.ac.in',
                address: 'Vellore, Tamil Nadu-632004'
            },
            facilities: ['Library', 'Hostel', 'Hospital', 'Research Labs', 'Sports Complex', 'Chapel'],
            studentReviews: [
                { name: 'Amit S.', rating: 4.6, comment: 'Great clinical exposure' },
                { name: 'Sneha R.', rating: 4.5, comment: 'Excellent faculty' }
            ]
        },
        'CLG-003': {
            collegeId: 'CLG-003',
            title: 'MAMC Delhi',
            category: 'Medical College',
            stream: 'Medical',
            state: 'Delhi',
            locationType: 'Urban',
            city: 'New Delhi',
            district: 'Central Delhi',
            latitude: 28.6353,
            longitude: 77.2250,
            ownership: 'Government',
            nmcRecognition: 'Yes',
            naacGrade: 'A+',
            courses: ['MBBS', 'MD', 'MS'],
            entranceExamIds: ['EXAM-001'],
            seats: 150,
            cutoffData: { general: 715, obc: 705, sc: 685, st: 675 },
            ranking: 3,
            fees: { mbbs: 30000, md: 40000 },
            hospital: 'MAMC Hospital',
            attachedHospitalCapacity: 2200,
            hostel: 'Yes',
            bondPolicy: 'No Bond',
            officialWebsite: 'http://www.mamc.ac.in/',
            officialSource: 'http://www.mamc.ac.in/',
            academicYear: '2026-27',
            verificationStatus: 'Verified',
            lastUpdated: '2026-07-19',
            contact: {
                phone: '011-23939019',
                email: 'info@mamc.ac.in',
                address: 'J
