<template>
    <div class="container">
        <div class="content-wrapper">
            <h1 class="main-title">Contact Us</h1>
            
            <section class="about-section">
                <h2 class="section-title">Get in Touch</h2>
                
                <p class="description">
                    Have questions about our rewards program or need assistance with your claims? We're here to help! Fill out the form below and our support team will get back to you within 24 hours.
                </p>

                <form @submit.prevent="submitForm" class="contact-form">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            v-model="formData.name"
                            required
                            :class="{ 'error': errors.name }"
                            placeholder="Enter your full name"
                        >
                        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            v-model="formData.email"
                            required
                            :class="{ 'error': errors.email }"
                            placeholder="Enter your email address"
                        >
                        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select
                            id="subject"
                            v-model="formData.subject"
                            required
                            :class="{ 'error': errors.subject }"
                        >
                            <option value="">Select a subject</option>
                            <option value="claim_issue">Claim Issue</option>
                            <option value="reward_inquiry">Reward Inquiry</option>
                            <option value="technical_support">Technical Support</option>
                            <option value="feedback">General Feedback</option>
                            <option value="other">Other</option>
                        </select>
                        <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
                    </div>

                    <div class="form-group">
                        <label for="claimCode">Claim Code (if applicable)</label>
                        <input
                            type="text"
                            id="claimCode"
                            v-model="formData.claimCode"
                            placeholder="Enter your claim code"
                        >
                    </div>

                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea
                            id="message"
                            v-model="formData.message"
                            required
                            :class="{ 'error': errors.message }"
                            placeholder="Please describe your inquiry or issue"
                            rows="5"
                        ></textarea>
                        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                    </div>

                    <div class="form-actions">
                        <button 
                            type="submit" 
                            class="submit-button"
                            :disabled="isSubmitting"
                        >
                            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                        </button>
                    </div>
                </form>

                <div v-if="submitStatus.show" :class="['status-message', submitStatus.type]">
                    {{ submitStatus.message }}
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                claimCode: '',
                message: ''
            },
            errors: {},
            isSubmitting: false,
            submitStatus: {
                show: false,
                type: '',
                message: ''
            }
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            
            if (!this.formData.name.trim()) {
                this.errors.name = 'Name is required';
            }
            
            if (!this.formData.email.trim()) {
                this.errors.email = 'Email is required';
            } else if (!this.validateEmail(this.formData.email)) {
                this.errors.email = 'Please enter a valid email address';
            }
            
            if (!this.formData.subject) {
                this.errors.subject = 'Please select a subject';
            }
            
            if (!this.formData.message.trim()) {
                this.errors.message = 'Message is required';
            }
            
            return Object.keys(this.errors).length === 0;
        },
        
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        async submitForm() {
            if (!this.validateForm()) return;
            
            this.isSubmitting = true;
            this.submitStatus.show = false;
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    this.submitStatus = {
                        show: true,
                        type: 'success',
                        message: 'Thank you for your message. We will respond within 24 hours!'
                    };
                    this.resetForm();
                } else {
                    throw new Error(data.message || 'Failed to send message');
                }
            } catch (error) {
                this.submitStatus = {
                    show: true,
                    type: 'error',
                    message: 'Sorry, there was an error sending your message. Please try again later.'
                };
            } finally {
                this.isSubmitting = false;
            }
        },
        
        resetForm() {
            this.formData = {
                name: '',
                email: '',
                subject: '',
                claimCode: '',
                message: ''
            };
        }
    }
}
</script>

<style scoped>
.about-container {
    background-color: #ffffff;
    min-height: 100vh;
    padding: 40px 20px;
}

.content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
}

.main-title {
    font-size: 2.8em;
    color: #2c3e50;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
}

.about-section {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 2em;
    color: #4f46e5;
    margin-bottom: 25px;
    font-weight: 600;
}

.description {
    font-size: 1.1em;
    color: #34495e;
    margin-bottom: 30px;
    line-height: 1.8;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1em;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #4f46e5;
}

.form-group .error {
    border-color: #e74c3c;
}

.error-message {
    color: #e74c3c;
    font-size: 0.9em;
    margin-top: 5px;
    display: block;
}

.form-actions {
    text-align: center;
    margin-top: 30px;
}

.submit-button {
    background-color: #4f46e5;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 6px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #2980b9;
}

.submit-button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}

.status-message {
    margin-top: 20px;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    font-weight: 500;
}

.status-message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.status-message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2.2em;
    }

    .section-title {
        font-size: 1.8em;
    }

    .description {
        font-size: 1em;
    }

    .about-section {
        padding: 20px;
    }
    
    .submit-button {
        width: 100%;
    }
}
</style>