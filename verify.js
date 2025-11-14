async function verifyCertificate() {
    const certNo = document.getElementById("cert_no").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const resultBox = document.getElementById("result");

    if (!certNo || !dob) {
        resultBox.style.display = "block";
        resultBox.className = "result invalid";
        resultBox.innerHTML = "❌ Please enter both Certificate Number and DOB.";
        return;
    }

    try {
        const response = await fetch("assets/data/students.json");
        const data = await response.json();

        const match = data.find(stu =>
            stu.certificate_number.toLowerCase() === certNo.toLowerCase() &&
            stu.dob === dob
        );

        if (match) {
            resultBox.style.display = "block";
            resultBox.className = "result valid";
            resultBox.innerHTML = `
                ✅ <strong>Certificate Verified</strong><br><br>
                <strong>Name:</strong> ${match.name}<br>
                <strong>Father Name:</strong> ${match.father_name}<br>
                <strong>Course:</strong> ${match.course}<br>
                <strong>Certificate No:</strong> ${match.certificate_number}<br>
                <strong>DOB:</strong> ${match.dob}<br>
                <strong>Issued Date:</strong> ${match.issued_date}<br>
            `;
        } else {
            resultBox.style.display = "block";
            resultBox.className = "result invalid";
            resultBox.innerHTML = "❌ Invalid Certificate Number or DOB.";
        }

    } catch (error) {
        resultBox.style.display = "block";
        resultBox.className = "result invalid";
        resultBox.innerHTML = "❌ Error loading data.";
        console.error(error);
    }
}
