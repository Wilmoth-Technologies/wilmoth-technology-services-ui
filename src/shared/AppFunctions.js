// API utility functions
export const submitContactForm = async (formData) => {
    try {
        const response = await fetch('https://api.mayberryminitrucks.com/email/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // API doesn't return a payload, so we just return success
        return { success: true };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};

// Form validation utilities
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    // Remove all non-digit characters except + for international numbers
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    
    // Check for US phone number patterns (10 digits, optionally with +1)
    const usPhoneRegex = /^(\+?1)?[2-9]\d{9}$/;
    
    // Check for international numbers (7-15 digits with optional +)
    const internationalRegex = /^\+?[1-9]\d{6,14}$/;
    
    return usPhoneRegex.test(cleaned) || internationalRegex.test(cleaned);
};

// Form data sanitization
export const sanitizeFormData = (data) => {
    const sanitized = {};
    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'string') {
            sanitized[key] = data[key].trim();
        } else {
            sanitized[key] = data[key];
        }
    });
    return sanitized;
};
