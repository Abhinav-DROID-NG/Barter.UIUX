// ===================================
// MOCK DATA MANAGEMENT - MANGALORE, INDIA
// ===================================

// Mock Users Data - Mangalore-based with diverse job types
function getMockUsers() {
    return [
        // WHITE COLLAR JOBS
        {
            id: 1,
            name: 'Priya Shetty',
            email: 'priya.shetty@example.com',
            avatar: null,
            skills: ['React', 'UI/UX Design', 'Figma', 'JavaScript', 'Frontend Development'],
            resources: ['Design Tools', 'Mentorship', 'Code Reviews'],
            bio: 'Senior UI/UX Designer at a tech startup. Passionate about creating beautiful user experiences. Available for freelance design consultations.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 34,
            verified: { github: true, linkedin: true }
        },
        {
            id: 2,
            name: 'Rohan D\'Souza',
            email: 'rohan.dsouza@example.com',
            avatar: null,
            skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Google Ads', 'Social Media'],
            resources: ['Marketing Tools', 'Campaign Templates', 'Analytics Reports'],
            bio: 'Digital Marketing Manager with 6 years experience. Helping local businesses grow online. Expert in SEO and social media marketing.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 28,
            verified: { github: false, linkedin: true }
        },
        {
            id: 3,
            name: 'Aditya Rao',
            email: 'aditya.rao@example.com',
            avatar: null,
            skills: ['Java', 'Spring Boot', 'MySQL', 'Microservices', 'AWS'],
            resources: ['Cloud Credits', 'Backend Expertise', 'Code Mentoring'],
            bio: 'Full Stack Developer at an MNC. Building scalable enterprise applications. Can help with Java and backend architecture.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 42,
            verified: { github: true, linkedin: true }
        },
        {
            id: 4,
            name: 'Sneha Hegde',
            email: 'sneha.hegde@example.com',
            avatar: null,
            skills: ['Accounting', 'Tally ERP', 'GST', 'Financial Planning', 'Excel'],
            resources: ['Financial Consulting', 'Tax Planning', 'Business Advisory'],
            bio: 'Chartered Accountant specializing in GST and taxation. Helping small businesses with financial planning and compliance.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 51,
            verified: { github: false, linkedin: true }
        },
        {
            id: 5,
            name: 'Vikram Bhat',
            email: 'vikram.bhat@example.com',
            avatar: null,
            skills: ['Data Analysis', 'Python', 'Power BI', 'SQL', 'Statistics'],
            resources: ['Data Visualization', 'Analysis Tools', 'Training Materials'],
            bio: 'Data Analyst working in healthcare sector. Expert in turning data into actionable insights. Available for data projects.',
            location: 'Mangalore, Karnataka',
            rating: 4.6,
            reviews: 23,
            verified: { github: true, linkedin: true }
        },
        {
            id: 6,
            name: 'Divya Nayak',
            email: 'divya.nayak@example.com',
            avatar: null,
            skills: ['HR Management', 'Recruitment', 'Training', 'Employee Relations', 'Payroll'],
            resources: ['HR Templates', 'Policy Documents', 'Interview Techniques'],
            bio: 'HR Manager with expertise in talent acquisition and employee development. Can help startups set up HR processes.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 19,
            verified: { github: false, linkedin: true }
        },

        // GREY COLLAR JOBS (Skilled Technical/Healthcare)
        {
            id: 7,
            name: 'Rahul Kumar',
            email: 'rahul.kumar@example.com',
            avatar: null,
            skills: ['AC Repair', 'Refrigeration', 'Electrical Work', 'HVAC Systems', 'Troubleshooting'],
            resources: ['Tools', 'Equipment', 'On-site Service'],
            bio: 'Certified AC and refrigeration technician with 8 years experience. Available for residential and commercial repairs.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 67,
            verified: { github: false, linkedin: false }
        },
        {
            id: 8,
            name: 'Anita Fernandes',
            email: 'anita.fernandes@example.com',
            avatar: null,
            skills: ['Nursing', 'Patient Care', 'First Aid', 'Medical Knowledge', 'Elder Care'],
            resources: ['Healthcare Support', 'Medical Advice', 'Home Nursing'],
            bio: 'Registered Nurse with 10 years experience. Offering home healthcare services and medical consultations.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 89,
            verified: { github: false, linkedin: true }
        },
        {
            id: 9,
            name: 'Suresh Poojary',
            email: 'suresh.poojary@example.com',
            avatar: null,
            skills: ['Plumbing', 'Pipe Fitting', 'Water Systems', 'Drainage', 'Installation'],
            resources: ['Plumbing Tools', 'Emergency Services', 'Free Consultation'],
            bio: 'Professional plumber with 12 years experience. Expert in residential and commercial plumbing. 24/7 emergency services.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 94,
            verified: { github: false, linkedin: false }
        },
        {
            id: 10,
            name: 'Meena Salian',
            email: 'meena.salian@example.com',
            avatar: null,
            skills: ['Beautician', 'Makeup', 'Hair Styling', 'Bridal Makeup', 'Skin Care'],
            resources: ['Makeup Kit', 'Salon Equipment', 'Beauty Tutorials'],
            bio: 'Professional beautician and makeup artist. Specializing in bridal makeup and beauty treatments. Home service available.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 76,
            verified: { github: false, linkedin: false }
        },
        {
            id: 11,
            name: 'Prakash Shetty',
            email: 'prakash.shetty@example.com',
            avatar: null,
            skills: ['Auto Mechanic', 'Vehicle Repair', 'Engine Diagnostics', 'Two-wheeler Service', 'Car Maintenance'],
            resources: ['Workshop Space', 'Tools & Equipment', 'Spare Parts'],
            bio: 'Experienced auto mechanic with own workshop. Expert in both two-wheelers and four-wheelers. Quality service at affordable rates.',
            location: 'Mangalore, Karnataka',
            rating: 4.6,
            reviews: 103,
            verified: { github: false, linkedin: false }
        },
        {
            id: 12,
            name: 'Kavitha Menon',
            email: 'kavitha.menon@example.com',
            avatar: null,
            skills: ['Teaching', 'Tuition', 'Science', 'Mathematics', 'CBSE Curriculum'],
            resources: ['Study Materials', 'Test Papers', 'Online Classes'],
            bio: 'Experienced tutor for classes 8-10. Specializing in Science and Mathematics. Online and home tuition available.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 58,
            verified: { github: false, linkedin: false }
        },

        // BLUE COLLAR JOBS
        {
            id: 13,
            name: 'Ramesh Naik',
            email: 'ramesh.naik@example.com',
            avatar: null,
            skills: ['Carpentry', 'Furniture Making', 'Wood Work', 'Door & Window Fitting', 'Interior Work'],
            resources: ['Carpentry Tools', 'Workshop', 'Material Sourcing'],
            bio: 'Skilled carpenter with 15 years experience. Custom furniture making, interior wood work, and repair services.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 87,
            verified: { github: false, linkedin: false }
        },
        {
            id: 14,
            name: 'Manjula Amin',
            email: 'manjula.amin@example.com',
            avatar: null,
            skills: ['Tailoring', 'Stitching', 'Alterations', 'Embroidery', 'Blouse Design'],
            resources: ['Sewing Machine', 'Fabric Knowledge', 'Design Ideas'],
            bio: 'Expert tailor specializing in ladies garments. Custom stitching, alterations, and designer blouses. Home pickup available.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 112,
            verified: { github: false, linkedin: false }
        },
        {
            id: 15,
            name: 'Ganesh Poojary',
            email: 'ganesh.poojary@example.com',
            avatar: null,
            skills: ['Painting', 'Wall Painting', 'Colour Consultation', 'Texture Work', 'Waterproofing'],
            resources: ['Painting Equipment', 'Colour Charts', 'Surface Preparation'],
            bio: 'Professional painter with 10 years experience. Residential and commercial painting, texture work, and waterproofing services.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 71,
            verified: { github: false, linkedin: false }
        },
        {
            id: 16,
            name: 'Lakshmi Shetty',
            email: 'lakshmi.shetty@example.com',
            avatar: null,
            skills: ['Cooking', 'Catering', 'Mangalorean Cuisine', 'North Indian', 'Event Catering'],
            resources: ['Catering Services', 'Recipe Knowledge', 'Food Delivery'],
            bio: 'Professional cook offering catering for parties and events. Expert in Mangalorean and North Indian cuisine. Tiffin service available.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 145,
            verified: { github: false, linkedin: false }
        },
        {
            id: 17,
            name: 'Santosh Kumar',
            email: 'santosh.kumar@example.com',
            avatar: null,
            skills: ['Welding', 'Fabrication', 'Metal Work', 'Gate Making', 'Grill Installation'],
            resources: ['Welding Equipment', 'Metal Materials', 'On-site Work'],
            bio: 'Experienced welder and fabricator. Custom metal works, gates, grills, and railings. Quality workmanship guaranteed.',
            location: 'Mangalore, Karnataka',
            rating: 4.6,
            reviews: 54,
            verified: { github: false, linkedin: false }
        },
        {
            id: 18,
            name: 'Pushpa Bhandary',
            email: 'pushpa.bhandary@example.com',
            avatar: null,
            skills: ['House Cleaning', 'Deep Cleaning', 'Sanitation', 'Organizing', 'Kitchen Cleaning'],
            resources: ['Cleaning Equipment', 'Eco-friendly Products', 'Regular Service'],
            bio: 'Professional house cleaning services. Deep cleaning, regular maintenance, and organizing. Trustworthy and thorough work.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 98,
            verified: { github: false, linkedin: false }
        },
        {
            id: 19,
            name: 'Dinesh Alva',
            email: 'dinesh.alva@example.com',
            avatar: null,
            skills: ['Driving', 'Car Driver', 'Logistics', 'Navigation', 'Vehicle Maintenance'],
            resources: ['Reliable Transport', 'City Knowledge', 'Flexible Timing'],
            bio: 'Professional driver with clean driving record. Available for full-time or part-time. Familiar with Mangalore and surrounding areas.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 62,
            verified: { github: false, linkedin: false }
        },
        {
            id: 20,
            name: 'Suma Rao',
            email: 'suma.rao@example.com',
            avatar: null,
            skills: ['Gardening', 'Landscaping', 'Plant Care', 'Organic Gardening', 'Terrace Gardens'],
            resources: ['Gardening Tools', 'Plant Knowledge', 'Design Ideas'],
            bio: 'Professional gardener specializing in home gardens and landscaping. Expert in organic gardening and terrace gardens.',
            location: 'Mangalore, Karnataka',
            rating: 4.8,
            reviews: 43,
            verified: { github: false, linkedin: false }
        },
        {
            id: 21,
            name: 'Nagaraj Shetty',
            email: 'nagaraj.shetty@example.com',
            avatar: null,
            skills: ['Electrician', 'Wiring', 'Panel Installation', 'Lighting', 'Appliance Repair'],
            resources: ['Electrical Tools', 'Emergency Service', 'Safety Equipment'],
            bio: 'Licensed electrician with 12 years experience. All types of electrical work, wiring, and appliance repairs. 24/7 emergency service.',
            location: 'Mangalore, Karnataka',
            rating: 4.9,
            reviews: 126,
            verified: { github: false, linkedin: false }
        },
        {
            id: 22,
            name: 'Manjunath',
            email: 'manjunath@example.com',
            avatar: null,
            skills: ['Masonry', 'Tiling', 'Flooring', 'Construction', 'Brick Work'],
            resources: ['Construction Tools', 'Material Knowledge', 'Skilled Team'],
            bio: 'Expert mason with 18 years experience. Specializing in tiling, flooring, and construction work. Quality work at competitive rates.',
            location: 'Mangalore, Karnataka',
            rating: 4.7,
            reviews: 81,
            verified: { github: false, linkedin: false }
        }
    ];
}

// Mock Projects Data - Indian Context
function getMockProjects() {
    return [
        {
            id: 1,
            name: 'Restaurant Website & App',
            description: 'Building a website and mobile app for a local Mangalorean restaurant with online ordering',
            collaborators: ['Priya Shetty', 'Aditya Rao', 'Rohan D\'Souza'],
            status: 'active',
            createdAt: '2025-10-15',
            updatedAt: '2025-10-24'
        },
        {
            id: 2,
            name: 'Home Renovation Project',
            description: 'Complete house renovation including painting, carpentry, plumbing and electrical work',
            collaborators: ['Ramesh Naik', 'Ganesh Poojary', 'Nagaraj Shetty', 'Suresh Poojary'],
            status: 'active',
            createdAt: '2025-10-20',
            updatedAt: '2025-10-25'
        },
        {
            id: 3,
            name: 'Small Business GST Compliance',
            description: 'Setting up GST compliance system for 5 local businesses',
            collaborators: ['Sneha Hegde', 'Vikram Bhat'],
            status: 'active',
            createdAt: '2025-10-18',
            updatedAt: '2025-10-23'
        },
        {
            id: 4,
            name: 'Wedding Event Planning',
            description: 'Complete wedding planning including catering, decoration, and makeup services',
            collaborators: ['Lakshmi Shetty', 'Meena Salian', 'Manjula Amin'],
            status: 'in-progress',
            createdAt: '2025-10-10',
            updatedAt: '2025-10-22'
        },
        {
            id: 5,
            name: 'Online Tuition Platform',
            description: 'Creating an online platform for local tutors to conduct classes',
            collaborators: ['Aditya Rao', 'Priya Shetty', 'Kavitha Menon'],
            status: 'in-progress',
            createdAt: '2025-10-05',
            updatedAt: '2025-10-20'
        },
        {
            id: 6,
            name: 'Salon Home Service App',
            description: 'Mobile app for booking home salon services in Mangalore',
            collaborators: ['Priya Shetty', 'Meena Salian', 'Rohan D\'Souza'],
            status: 'active',
            createdAt: '2025-10-12',
            updatedAt: '2025-10-24'
        },
        {
            id: 7,
            name: 'Garden Landscaping',
            description: 'Design and execute landscaping for apartment complex',
            collaborators: ['Suma Rao', 'Ramesh Naik'],
            status: 'active',
            createdAt: '2025-10-08',
            updatedAt: '2025-10-21'
        }
    ];
}

// Mock Messages Data - Indian Names
function getMockMessages() {
    return [
        {
            id: 1,
            from: 'Priya Shetty',
            preview: 'Can we discuss the restaurant website design?',
            time: '10m',
            unread: 3,
            messages: [
                { sender: 'Priya Shetty', text: 'Can we discuss the restaurant website design?', time: '10:30 AM', received: true },
                { sender: 'Priya Shetty', text: 'I have some mockups ready to show', time: '10:31 AM', received: true },
                { sender: 'You', text: 'Sure! Let\'s schedule a call', time: '10:35 AM', received: false },
                { sender: 'You', text: 'I\'m free tomorrow morning', time: '10:35 AM', received: false },
                { sender: 'Priya Shetty', text: 'Perfect! 11 AM works for me', time: '10:40 AM', received: true },
                { sender: 'You', text: 'Great! See you then', time: '10:45 AM', received: false },
                { sender: 'Priya Shetty', text: 'Looking forward to it! 😊', time: '10:46 AM', received: true }
            ]
        },
        {
            id: 2,
            from: 'Ramesh Naik',
            preview: 'The furniture work is complete. Please check',
            time: '1h',
            unread: 2,
            messages: []
        },
        {
            id: 3,
            from: 'Sneha Hegde',
            preview: 'GST filing deadline is approaching',
            time: '3h',
            unread: 1,
            messages: []
        },
        {
            id: 4,
            from: 'Lakshmi Shetty',
            preview: 'Menu finalized for the wedding event',
            time: 'Yesterday',
            unread: 0,
            messages: []
        },
        {
            id: 5,
            from: 'Nagaraj Shetty',
            preview: 'Electrical work completed. Need your approval',
            time: '2 days ago',
            unread: 0,
            messages: []
        }
    ];
}

// Mock Reviews Data - Indian Context
function getMockReviews() {
    return [
        {
            id: 1,
            author: 'Rajesh Kumar',
            rating: 5,
            date: '2025-10-20',
            text: 'Excellent work! Very professional and completed the project on time. The quality is outstanding. Highly recommend!'
        },
        {
            id: 2,
            author: 'Anitha Rao',
            rating: 5,
            date: '2025-10-15',
            text: 'Very satisfied with the service. Punctual, skilled, and reasonable rates. Will definitely hire again for future projects.'
        },
        {
            id: 3,
            author: 'Sunil Shetty',
            rating: 4,
            date: '2025-10-10',
            text: 'Good work overall. Had some minor delays but the final result was worth the wait. Fair pricing.'
        },
        {
            id: 4,
            author: 'Deepa Menon',
            rating: 5,
            date: '2025-10-05',
            text: 'Best service in Mangalore! Very cooperative and understood exactly what I needed. Exceptional quality!'
        }
    ];
}

// Mock Collaboration Requests - Indian Context
function getMockCollaborationRequests() {
    return [
        {
            id: 1,
            from: 'Rohan D\'Souza',
            project: 'Digital Marketing Campaign for Local Business',
            time: '2 hours ago',
            status: 'pending'
        },
        {
            id: 2,
            from: 'Suresh Poojary',
            project: 'Plumbing Work for New Building',
            time: '1 day ago',
            status: 'pending'
        },
        {
            id: 3,
            from: 'Meena Salian',
            project: 'Bridal Makeup Collaboration',
            time: '3 days ago',
            status: 'pending'
        },
        {
            id: 4,
            from: 'Vikram Bhat',
            project: 'Data Analysis for Healthcare Project',
            time: '5 days ago',
            status: 'pending'
        }
    ];
}

// Save data to localStorage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

// Load data from localStorage
function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}

// Initialize mock data if not exists
function initializeMockData() {
    if (!loadFromLocalStorage('mockUsers')) {
        saveToLocalStorage('mockUsers', getMockUsers());
    }
    if (!loadFromLocalStorage('mockProjects')) {
        saveToLocalStorage('mockProjects', getMockProjects());
    }
    if (!loadFromLocalStorage('mockMessages')) {
        saveToLocalStorage('mockMessages', getMockMessages());
    }
    if (!loadFromLocalStorage('mockReviews')) {
        saveToLocalStorage('mockReviews', getMockReviews());
    }
    if (!loadFromLocalStorage('mockRequests')) {
        saveToLocalStorage('mockRequests', getMockCollaborationRequests());
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initializeMockData();
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getMockUsers,
        getMockProjects,
        getMockMessages,
        getMockReviews,
        getMockCollaborationRequests,
        saveToLocalStorage,
        loadFromLocalStorage
    };
}