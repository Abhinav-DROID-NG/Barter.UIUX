// ===================================
// AUTHENTICATION
// ===================================

// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Clear previous errors
            clearError('email');
            clearError('password');
            
            // Validation
            let isValid = true;
            
            if (!email || !validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!password || password.length < 6) {
                showError('password', 'Password must be at least 6 characters');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Mock login (in real app, this would be an API call)
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Logging in...';
            
            setTimeout(() => {
                // Simulate successful login
                const user = {
                    name: 'John Doe',
                    email: email,
                    avatar: null,
                    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design'],
                    resources: ['Cloud Infrastructure', 'Dev Tools', 'Mentorship'],
                    bio: 'Full-stack developer passionate about building innovative solutions.',
                    location: 'San Francisco, CA',
                    rating: 4.5,
                    reviews: 12,
                    verified: { github: true, linkedin: true }
                };
                
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                showNotification('Login successful! Redirecting...', 'success');
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            }, 1500);
        });
    }
});

// Sign Up Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const location = document.getElementById('location').value;
            const bio = document.getElementById('bio').value;
            
            // Get tags
            const skills = Array.from(document.querySelectorAll('#skillsContainer .tag-item'))
                .map(tag => tag.textContent.replace('×', '').trim());
            const resources = Array.from(document.querySelectorAll('#resourcesContainer .tag-item'))
                .map(tag => tag.textContent.replace('×', '').trim());
            
            // Clear previous errors
            clearError('name');
            clearError('email');
            clearError('password');
            clearError('confirmPassword');
            
            // Validation
            let isValid = true;
            
            if (!name || name.length < 2) {
                showError('name', 'Please enter your full name');
                isValid = false;
            }
            
            if (!email || !validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!password || password.length < 8) {
                showError('password', 'Password must be at least 8 characters');
                isValid = false;
            }
            
            if (password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match');
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Mock signup
            const submitBtn = signupForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Creating account...';
            
            setTimeout(() => {
                const user = {
                    name: name,
                    email: email,
                    avatar: null,
                    skills: skills.length > 0 ? skills : ['JavaScript'],
                    resources: resources.length > 0 ? resources : ['Time'],
                    bio: bio || 'New member of the Barter community!',
                    location: location || 'Not specified',
                    rating: 0,
                    reviews: 0,
                    verified: { github: false, linkedin: false }
                };
                
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                showNotification('Account created successfully! Redirecting...', 'success');
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            }, 1500);
        });
    }
});

// Check if user should access page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['dashboard.html', 'profile.html', 'search.html', 'chat.html', 'payment.html'];
    const authPages = ['login.html', 'signup.html'];
    
    const isLoggedIn = checkAuth();
    
    // Redirect to login if trying to access protected page without auth
    if (protectedPages.includes(currentPage) && !isLoggedIn) {
        window.location.href = 'login.html';
    }
    
    // Redirect to dashboard if logged in and trying to access auth pages
    if (authPages.includes(currentPage) && isLoggedIn) {
        window.location.href = 'dashboard.html';
    }
    
    // Load current user data
    if (isLoggedIn) {
        loadCurrentUserData();
    }
});

// Load current user data into page
function loadCurrentUserData() {
    const userStr = localStorage.getItem('currentUser');
    if (!userStr) return;
    
    const user = JSON.parse(userStr);
    
    // Update user name in dashboard
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        userNameElement.textContent = user.name.split(' ')[0];
    }
    
    // Update profile page if on profile page
    if (window.location.pathname.includes('profile.html')) {
        updateProfilePage(user);
    }
}

function updateProfilePage(user) {
    // Update profile name
    const profileName = document.getElementById('profileName');
    if (profileName) profileName.textContent = user.name;
    
    // Update rating
    const profileRating = document.getElementById('profileRating');
    if (profileRating) {
        profileRating.textContent = `${user.rating} (${user.reviews} reviews)`;
    }
    
    // Update location
    const profileLocation = document.getElementById('profileLocation');
    if (profileLocation) profileLocation.textContent = user.location;
    
    // Update bio
    const profileBio = document.getElementById('profileBio');
    if (profileBio) profileBio.textContent = user.bio;
    
    // Update verification badges
    const verificationBadges = document.getElementById('verificationBadges');
    if (verificationBadges) {
        verificationBadges.innerHTML = '';
        
        const githubBadge = document.createElement('span');
        githubBadge.className = `verification-badge ${user.verified.github ? 'verified' : 'unverified'}`;
        githubBadge.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
        `;
        verificationBadges.appendChild(githubBadge);
        
        const linkedinBadge = document.createElement('span');
        linkedinBadge.className = `verification-badge ${user.verified.linkedin ? 'verified' : 'unverified'}`;
        linkedinBadge.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
        `;
        verificationBadges.appendChild(linkedinBadge);
    }
    
    // Update skills
    const skillsList = document.getElementById('skillsList');
    if (skillsList && user.skills) {
        skillsList.innerHTML = '';
        user.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = skill;
            skillsList.appendChild(tag);
        });
    }
    
    // Update resources
    const resourcesList = document.getElementById('resourcesList');
    if (resourcesList && user.resources) {
        resourcesList.innerHTML = '';
        user.resources.forEach(resource => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = resource;
            resourcesList.appendChild(tag);
        });
    }
}