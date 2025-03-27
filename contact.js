document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get values from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create the text content to save
    const content = `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        -------------------------------
    `;

    // Create a Blob with the content and specify the file type as text/plain
    const blob = new Blob([content], { type: "text/plain" });

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with a filename
    link.download = "contact_form_submission.txt";

    // Create an object URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Programmatically trigger a click event to start the download
    link.click();

    // Display a thank you message
    document.getElementById("thank-you-message").innerHTML = `
        <p>Thank you for contacting us! Your message has been saved.</p>
    `;

    // Optionally clear the form fields
    document.getElementById("contactForm").reset();
});
