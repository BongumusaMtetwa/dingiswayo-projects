// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    
    const quoteButton = document.getElementById('quoteBtn');

    // Simple interaction: Alert or redirect when button is clicked
    quoteButton.addEventListener('click', () => {
        // You can change this to redirect to an email or a form
        const email = "dingiswayoprojects@gmail.com";
        const subject = "Quote Request for Panelbeating";
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        
        console.log("Redirecting to email client...");
    });

    // Console message to verify JS is linked correctly
    console.log("Panelbeating Placeholder Loaded Successfully.");
});