// Comment: TypeScript Code to Generate Resume

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    const generatedResume = document.getElementById('generated-resume') as HTMLElement;
    const resumeOutputContent = document.getElementById('resume-output-content') as HTMLElement;

    generateButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Get input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

        // Create the resume content
        const resumeContent = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
        `;

        // Display the generated resume
        resumeOutputContent.innerHTML = resumeContent;
        generatedResume.style.display = 'block'; // Show the generated resume
    });
});
