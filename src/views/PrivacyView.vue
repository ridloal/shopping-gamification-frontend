<template>
    <div class="container">
        <div class="content-wrapper">
            <h1 class="main-title">Privacy Policy</h1>
            
            <section class="about-section">
                <h2 class="section-title">Your Privacy Matters</h2>
                
                <p class="description">
                    At HartaKarun, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
                </p>

                <h3 class="subsection-title">1. Information We Collect</h3>
                <p class="description">
                    We collect the following types of information: <br>
                    • Personal information (name, email, contact details) <br>
                    • Social media handles and engagement data <br>
                    • Claim history and reward preferences <br>
                    • Device information and usage statistics
                </p>

                <h3 class="subsection-title">2. How We Use Your Information</h3>
                <p class="description">
                    Your information helps us: <br>
                    • Verify your eligibility for rewards <br>
                    • Process and track your claims <br>
                    • Improve our services and user experience <br>
                    • Communicate updates and promotional offers <br>
                    • Prevent fraud and maintain platform security
                </p>

                <h3 class="subsection-title">3. Social Media Integration</h3>
                <p class="description">
                    When you connect your social media accounts, we: <br>
                    • Access only the necessary public engagement data <br>
                    • Never post without your explicit permission <br>
                    • Do not store your social media passwords <br>
                    • Respect platform-specific privacy settings
                </p>

                <h3 class="subsection-title">4. Data Protection</h3>
                <p class="description">
                    We implement robust security measures to protect your data: <br>
                    • Encryption of sensitive information <br>
                    • Regular security audits and updates <br>
                    • Strict access controls for staff <br>
                    • Secure data storage and transmission
                </p>

                <h3 class="subsection-title">5. Data Sharing</h3>
                <p class="description">
                    We may share your information with: <br>
                    • Verification service providers <br>
                    • Partner brands (with your consent) <br>
                    • Legal authorities when required <br>
                    We never sell your personal data to third parties.
                </p>

                <h3 class="subsection-title">6. Your Rights</h3>
                <p class="description">
                    You have the right to: <br>
                    • Access your personal data <br>
                    • Request data correction or deletion <br>
                    • Opt-out of marketing communications
                </p>

                <div class="cta-section">
                    <p class="cta-text">
                        For privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrivacyView'
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

.subsection-title {
    font-size: 1.5em;
    color: #2c3e50;
    margin: 25px 0 15px;
    font-weight: 600;
}

.description {
    font-size: 1.1em;
    color: #34495e;
    margin-bottom: 20px;
    line-height: 1.8;
}

.cta-section {
    margin-top: 40px;
    text-align: center;
    padding: 20px;
    background-color: #e8f4fc;
    border-radius: 8px;
}

.cta-text {
    font-size: 1.3em;
    color: #2980b9;
    font-weight: 600;
    margin: 0;
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2.2em;
    }

    .section-title {
        font-size: 1.8em;
    }

    .subsection-title {
        font-size: 1.3em;
    }

    .description {
        font-size: 1em;
    }

    .about-section {
        padding: 20px;
    }
}
</style>