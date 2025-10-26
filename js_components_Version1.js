// ===================================
// COMPONENT INTERACTIONS
// ===================================

// Tag Input Component
document.addEventListener('DOMContentLoaded', function() {
    initializeTagInputs();
    initializeStarRating();
    initializeCollaborationForm();
    initializeReviewForm();
});

function initializeTagInputs() {
    // Skills input
    const skillsInput = document.getElementById('skillsInput');
    const skillsContainer = document.getElementById('skillsContainer');
    
    if (skillsInput && skillsContainer) {
        skillsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const value = this.value.trim();
                if (value) {
                    addTag(value, skillsContainer, this);
                }
            }
        });
    }
    
    // Resources input
    const resourcesInput = document.getElementById('resourcesInput');
    const resourcesContainer = document.getElementById('resourcesContainer');
    
    if (resourcesInput && resourcesContainer) {
        resourcesInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const value = this.value.trim();
                if (value) {
                    addTag(value, resourcesContainer, this);
                }
            }
        });
    }
    
    // Requested skills input in collaboration modal
    const requestedSkillsInput = document.getElementById('requestedSkillsInput');
    const requestedSkillsContainer = document.getElementById('requestedSkillsContainer');
    
    if (requestedSkillsInput && requestedSkillsContainer) {
        requestedSkillsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const value = this.value.trim();
                if (value) {
                    addTag(value, requestedSkillsContainer, this);
                }
            }
        });
    }
}

function addTag(text, container, input) {
    // Check if tag already exists
    const existingTags = Array.from(container.querySelectorAll('.tag-item'))
        .map(tag => tag.textContent.replace('×', '').trim().toLowerCase());
    
    if (existingTags.includes(text.toLowerCase())) {
        showNotification('Tag already exists', 'error');
        return;
    }
    
    const tagElement = document.createElement('div');
    tagElement.className = 'tag-item';
    tagElement.innerHTML = `
        ${text}
        <button type="button" class="tag-remove" onclick="removeTag(this)">×</button>
    `;
    
    // Insert before input wrapper
    const inputWrapper = container.querySelector('.tag-input-wrapper');
    container.insertBefore(tagElement, inputWrapper);
    
    input.value = '';
}

function removeTag(button) {
    button.parentElement.remove();
}

// Star Rating Component
function initializeStarRating() {
    const starRating = document.getElementById('starRating');
    const ratingValue = document.getElementById('ratingValue');
    
    if (!starRating || !ratingValue) return;
    
    const stars = starRating.querySelectorAll('.star');
    let selectedRating = 0;
    
    stars.forEach((star, index) => {
        // Click event
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            ratingValue.value = selectedRating;
            updateStars(selectedRating);
        });
        
        // Hover event
        star.addEventListener('mouseenter', function() {
            updateStars(index + 1);
        });
    });
    
    // Reset on mouse leave
    starRating.addEventListener('mouseleave', function() {
        updateStars(selectedRating);
    });
    
    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
                star.textContent = '★';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
    }
}

// Collaboration Form
function initializeCollaborationForm() {
    const collaborationForm = document.getElementById('collaborationForm');
    
    if (!collaborationForm) return;
    
    collaborationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectTitle = document.getElementById('projectTitle').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const requestedSkills = Array.from(
            document.querySelectorAll('#requestedSkillsContainer .tag-item')
        ).map(tag => tag.textContent.replace('×', '').trim());
        
        if (!projectTitle || !projectDescription) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Simulate sending request
        const submitBtn = collaborationForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
        
        setTimeout(() => {
            showNotification('Collaboration request sent successfully!', 'success');
            closeModal('collaborationModal');
            collaborationForm.reset();
            
            // Clear tags
            document.querySelectorAll('#requestedSkillsContainer .tag-item').forEach(tag => tag.remove());
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Request';
        }, 1500);
    });
}

// Review Form
function initializeReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const rating = document.getElementById('ratingValue').value;
        const reviewText = document.getElementById('reviewText').value;
        
        if (rating == 0) {
            showNotification('Please select a rating', 'error');
            return;
        }
        
        if (!reviewText.trim()) {
            showNotification('Please write a review', 'error');
            return;
        }
        
        // Simulate submitting review
        const submitBtn = reviewForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';
        
        setTimeout(() => {
            showNotification('Review submitted successfully!', 'success');
            closeModal('reviewModal');
            reviewForm.reset();
            document.getElementById('ratingValue').value = 0;
            
            // Reset stars
            document.querySelectorAll('#starRating .star').forEach(star => {
                star.classList.remove('active');
                star.textContent = '☆';
            });
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Review';
        }, 1500);
    });
}

// Tooltip Component (Optional enhancement)
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const text = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = text;
            tooltip.style.cssText = `
                position: absolute;
                background: #1F2937;
                color: white;
                padding: 0.5rem 0.75rem;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                white-space: nowrap;
                z-index: 9999;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                document.body.removeChild(this._tooltip);
                this._tooltip = null;
            }
        });
    });
}