<template>
    <div class="container">
        <div class="content-wrapper">
            <h1 class="main-title">About HartaKarun</h1>
            
            <section class="about-section">
                <h2 class="section-title">Welcome to Your Gateway to Exciting Rewards!</h2>
                
                <p class="description">
                    HartaKarun is an innovative platform designed to reward our engaged community members with exciting prizes and exclusive shopping vouchers. We believe in creating meaningful connections between brands and consumers through interactive and rewarding experiences.
                </p>

                <h3 class="subsection-title">How It Works</h3>
                <p class="description">
                    Our unique reward system allows users to claim fantastic prizes and valuable vouchers that can be redeemed on selected premium products showcased on our homepage. By actively engaging with our brand partners on social media platforms through likes, follows, comments, and shares, you unlock opportunities to win amazing rewards.
                </p>

                <h3 class="subsection-title">Simple Claiming Process</h3>
                <p class="description">
                    Once you've completed the social media engagement requirements, you can submit your claim request through our user-friendly form. Our advanced verification system will automatically check your eligibility based on your social media interactions with our featured products and brand partners.
                </p>

                <h3 class="subsection-title">Spin to Win!</h3>
                <p class="description">
                    Successfully verified claims grant you access to our exciting Spin Wheel feature! Each spin presents an opportunity to win from our diverse selection of rewards, including exclusive discount vouchers, special merchandise, and premium product bundles. The thrill of spinning and winning makes every engagement worthwhile!
                </p>

                <h3 class="subsection-title">Track Your Rewards</h3>
                <p class="description">
                    We've made it easy to keep track of your claims. Each submission generates a unique claim code that you can use to monitor your request status in real-time. Stay updated on your rewards journey from submission to verification, and finally to claiming your prize.
                </p>

                <div class="cta-section">
                    <p class="cta-text">
                        Join our growing community of winners and start your rewarding journey today!
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsView'
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