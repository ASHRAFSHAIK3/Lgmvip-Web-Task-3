function updatePreviousSubmissions() {
            const previousSubmissions = JSON.parse(localStorage.getItem("enrollmentSubmissions")) || [];
            const table = document.getElementById("previousSubmissions");

            // Clear previous data from the table
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            // Add each submission to the table
            previousSubmissions.forEach((submission) => {
                const newRow = table.insertRow(-1);
                newRow.insertCell(0).innerText = submission.fullName;
                newRow.insertCell(1).innerText = submission.email;
                newRow.insertCell(2).innerText = submission.phone;
                newRow.insertCell(3).innerText = submission.gender;
                newRow.insertCell(4).innerText = submission.dateOfBirth;
            });
        }
        updatePreviousSubmissions();

        // Listen for form submit
        document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const formData = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                dateOfBirth: document.getElementById("dateOfBirth").value,
                
            };

            const previousSubmissions = JSON.parse(localStorage.getItem("enrollmentSubmissions")) || [];
            previousSubmissions.push(formData);
            localStorage.setItem("enrollmentSubmissions", JSON.stringify(previousSubmissions));

            updatePreviousSubmissions();


            alert("Form submitted successfully!");
        });
        