<template>
    <div class="container">
        <div class="content-wrapper">
            <h1 class="main-title">Terms and Conditions</h1>
            
            <section class="about-section">
                <h2 class="section-title">Welcome to HartaKarun</h2>
                
                <h3 class="subsection-title">1. Acceptance of Terms</h3>
                <p class="description">
                    By accessing and using HartaKarun, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.
                </p>

                <h3 class="subsection-title">2. Eligibility Requirements</h3>
                <p class="description">
                    To participate in our reward program, users must: <br>
                    • Be at least 13 years of age <br>
                    • Complete all required social media engagement activities authentically <br>
                    • Provide accurate and truthful information during the claim process <br>
                    • Have a valid social media account that meets our minimum activity requirements
                </p>

                <h3 class="subsection-title">3. Reward Claims</h3>
                <p class="description">
                    All reward claims are subject to verification. HartaKarun reserves the right to: <br>
                    • Verify any social media engagement activities <br>
                    • Reject claims that don't meet our requirements <br>
                    • Limit the number of claims per user/household <br>
                    • Modify or cancel rewards at our discretion
                </p>

                <h3 class="subsection-title">4. Spin Wheel Rules</h3>
                <p class="description">
                    • Each spin opportunity is granted only after successful verification <br>
                    • Spin results are final and non-negotiable <br>
                    • Rewards shown on the wheel are subject to availability <br>
                    • Users must claim their rewards within the specified timeframe <br>
                </p>

                <h3 class="subsection-title">5. Prohibited Activities</h3>
                <p class="description">
                    Users are strictly prohibited from: <br>
                    • Using automated systems or bots <br>
                    • Creating multiple accounts <br>
                    • Manipulating social media engagement metrics <br>
                    • Sharing or selling reward codes <br>
                    • Attempting to hack or manipulate the spin wheel
                </p>

                <h3 class="subsection-title">6. Modification of Terms</h3>
                <p class="description">
                    HartaKarun reserves the right to modify these terms at any time. Users will be notified of any changes through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>

                <div class="cta-section">
                    <p class="cta-text">
                        For any questions regarding our Terms and Conditions, please contact our support team.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TermsView'
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
    color: #4f46e5;
    font-weight: 600;
    margin: 0;
}

p {
    text-align: justify;
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