document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("myModel");
    let startBtn = document.getElementById("startBtn");
    let nextBtn = document.getElementById("nextBtn");
    let skipBtn = document.getElementById("skipBtn");
    let userInput = document.getElementById("userInput");
    let modalPrompt = document.getElementById("modalPrompt");
    let modalPrompt1 = document.getElementById("modalPrompt1");
    let userInfoDisplay = document.getElementById("userInfoDisplay");
    let progressPercentage = document.getElementById("progressPercentage");
    let progressBar = document.getElementById("progressBar");
    let aboutmeBtn = document.getElementById("aboutmeBtn");
    let myModelButtns = document.getElementById("myModelButtns");

    let userDetails = { name: "", surname: "", age: "", gender: "", agree: "", rational: "", doa: "", task: "", place: "", assignmenttype: "", area: "", degree: "", university: "", year: "", country: "", availability: "", tel: "", email: ""};
    let step = 0;

    startBtn.addEventListener('click', function() {
        modal.style.display = "";
        modal.style.visibility = "visible";
        progressBar.style.display = "";
        progressBar.style.visibility = "visible";
        progressPercentage.style.display = "";
        progressPercentage.style.visibility = "visible";       
        aboutmeBtn.style.display = "";
        aboutmeBtn.style.visibility = "visible";    
        myModelButtns.style.display = "";
        myModelButtns.style.visibility = "visible";  
        userInput.value = "";
        modalPrompt1.textContent = "STEP 1 Personal Details | Question 1/5:";
        modalPrompt.textContent = "Enter your name:";
        startBtn.style.display = "none";
        document.querySelectorAll('.hide-initially').forEach(function(element) {
            element.style.display = ''; // Adjust as needed based on your specific layout
        });
    });

   
    

    nextBtn.addEventListener('click', function() {
        switch (step) {
            case 0:
                modalPrompt1.textContent = "STEP 1  Personal Details | Question 2/5:";
                userDetails.name = userInput.value;
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your  Surname:";
                break;
            case 1:
                modalPrompt1.textContent = "STEP 1  Personal Details | Question 3/5:";
                userDetails.surname = userInput.value;
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your age:";
                break;                
            case 2:
                modalPrompt1.textContent = "STEP 1  Personal Details | Question 4/5:";
                userDetails.age = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Gander :";
                break;
            case 3:
                modalPrompt1.textContent = "STEP 1  Personal Details | Question 5/5:";
                userDetails.gender = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Are you agree with terms ( Yes / No ) ? :";
                break;
            case 4:        
                userDetails.agree = userInput.value;                        
                userInput.value = ""; // Clear input for the next entry
                progressPercentage.textContent = "Profile Completed 25%";
                updateProgressBar(25);
                displayUserInfo(); // Now display marks info, appending to user details
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 1/5:";
                modalPrompt.textContent = "What brings you to this cause:";
                break;  
            case 5:
                modalPrompt1.textContent = "Step 2  Volunteering tasks | Question 2/5:";
                userDetails.rational = userInput.value;                
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter DoA:";
                break;       
            case 6:
                modalPrompt1.textContent = "Step 2  Volunteering tasks | Question 3/5:";
                userDetails.doa = userInput.value;                
                userInput.value = ""; // Clear input for the next entry                
                modalPrompt.textContent = "Enter your Task:";
                break;                           
            case 7:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 4/5:";
                userDetails.task = userInput.value;                
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Place:";
                break;
            case 8:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 5/5:";
                userDetails.place = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Assignment type:";
                break;
            case 9:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 1/5:";
                userDetails.assignmenttype = userInput.value;
                progressPercentage.textContent = "Profile Completed 50%";
                updateProgressBar(50);
                displayOtherInfo(); // Now display marks info, appending to user details
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your main field of study:";
                break;
            case 10:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 2/5:";
                userDetails.area = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Higest Degree:";
                break;
            case 11:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 3/5:";
                userDetails.degree = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your University/Institude :";
                break;
            case 12:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 4/5:";
                userDetails.university = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Completion year:";
                break;
            case 13:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 5/5:";
                userDetails.year = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Country:";
                break;
            case 14:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 1/4:";
                userDetails.country = userInput.value;
                progressPercentage.textContent = "Profile Completed 75%";
                updateProgressBar(75);
                displayThirdInfo(); // Now display marks info, appending to user details
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Availability:";
                break;
            case 15:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 2/4";
                userDetails.availability = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Surname:";
                break;
            case 16:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 3/4";
                userDetails.surname = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Tel:";
                break;
            case 17:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 4/4";
                userDetails.tel = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                modalPrompt.textContent = "Enter your Email:";
                break;
            case 18:
                userDetails.email = userInput.value;
                userInput.value = ""; // Clear input for the next entry
                progressPercentage.textContent = "Profile Completed 100%";
                updateProgressBar(100);
                displayAll(); // Now display marks info, appending to user details
                break;
        }
        step++;
    });
    
    skipBtn.addEventListener('click', function() {
        // Increment step to move to the next frame
        step++;
        // Call the function to handle the next frame
        handleNextFrame();
    });
    
    function handleNextFrame() {
        switch (step) {
            case 0:
                modalPrompt1.textContent = "Step 1 Personal Details | Question 1/5:";
                userDetails.name = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your  Surname:";
                break;
            case 1:
                modalPrompt1.textContent = "Step 1 Personal Details | Question 1/5:";
                userDetails.surname = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your surname:";
                break;
            case 2:
                modalPrompt1.textContent = "Step 1 Personal Details | Question 1/5:";
                userDetails.age = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your age:";
                break;
            case 3:
                modalPrompt1.textContent = "Step 1 Personal Details | Question 1/5:";
                userDetails.gender = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your gender:";
                break;
            case 4:
                modalPrompt1.textContent = "Step 1 Personal Details | Question 1/5:";
                userDetails.agree = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Do you agree with the terms?";
                break;
            case 5:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 1/5:";
                userDetails.rational= "skip";
                userInput.value = ""; // Clear input field
                updateProgressBar(25);
                displayUserInfo(); // Now display marks info, appending to user details
                modalPrompt.textContent = "What brings you to this cause ? :";
                break;
            case 6:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 2/5:";
                userDetails.doa = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Date of Arrival:";
                break;
            case 7:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 3/5:";
                userDetails.task = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Task:";
                break;
            case 8:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 4/5:";
                userDetails.place = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Place:";
                break;
            case 9:
                modalPrompt1.textContent = "Step 2 Volunteering tasks | Question 5/5:";
                userDetails.assignmenttype = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Assignment type:";
                break;
            case 10:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 1/5:";
                userDetails.area = "skip";
                updateProgressBar(50);
                displayOtherInfo(); // Now display marks info, appending to user details
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your field of Study:";
                break;
            case 11:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 2/5:";
                userDetails.degree = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Highest Degree:";
                break;
            case 12:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 3/5:";
                userDetails.university = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your University/Institute:";
                break;
            case 13:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 4/5:";
                userDetails.year = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Completion year:";
                break;
            case 14:
                modalPrompt1.textContent = "Step 3 Qulifications | Question 5/5:";
                userDetails.country = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Country:";
                break;
            case 15:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 1/5:";
                userDetails.availability = "skip";
                updateProgressBar(75);
                displayThirdInfo(); // Now display marks info, appending to user details
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Availability:";
                break;
            case 16:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 2/5:";
                userDetails.surname = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Surname:";
                break;
            case 17:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 3/5:";
                userDetails.tel = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Tel:";
                break;
            case 18:
                modalPrompt1.textContent = "Step 4 Availability and Contact | Question 4/4:";
                userDetails.email = "skip";
                userInput.value = ""; // Clear input field
                modalPrompt.textContent = "Enter your Email:";
                break;
            default:
                updateProgressBar(100);
                displayAll(); // Now display marks info, appending to user details
                break;
        }
    }
    


    function displayUserInfo() {
        userInfoDisplay.innerHTML = `
            <p>Name: ${userDetails.name}</p>
            <p>Surname: ${userDetails.surname}</p>
            <p>Age: ${userDetails.age}</p> 
            <p>Gender: ${userDetails.gender}</p>
            <p>Agree with terms: ${userDetails.agree}</p>              
        `;
    }

    function displayOtherInfo() {
        userInfoDisplay.innerHTML = `
            <p>Rational: ${userDetails.rational}</p>
            <p>DoA: ${userDetails.doa}</p>
            <p>Task: ${userDetails.task}</p>
            <p>Place: ${userDetails.place}</p>
            <p>Assignment type: ${userDetails.assignmenttype}</p>
            
        `;
    }

    function displayThirdInfo() {
        userInfoDisplay.innerHTML = `
            <p>Area of study: ${userDetails.area}</p>
            <p>Higest degree: ${userDetails.degree}</p>
            <p>University/Institude: ${userDetails.university}</p>
            <p>Completion year: ${userDetails.year}</p>
            <p>Country: ${userDetails.country}</p>
            
        `;
    }

    function displayAll() {
        userInfoDisplay.innerHTML = `
            <p>Name: ${userDetails.name}</p>
            <p>Surname: ${userDetails.surname}</p>
            <p>Age: ${userDetails.age}</p> 
            <p>Gender: ${userDetails.gender}</p>
            <p>Agree with terms: ${userDetails.agree}</p> 
            <p>Rational: ${userDetails.rational}</p>
            <p>DoA: ${userDetails.doa}</p>
            <p>Task: ${userDetails.task}</p>
            <p>Place: ${userDetails.place}</p>
            <p>Assignment type: ${userDetails.assignmenttype}</p>    
            <p>Area of study: ${userDetails.area}</p>
            <p>Higest degree: ${userDetails.degree}</p>
            <p>University/Institude: ${userDetails.university}</p>
            <p>Completion year: ${userDetails.year}</p>
            <p>Country: ${userDetails.country}</p>
            <p>Availability: ${userDetails.availability}</p>
            <p>Surname: ${userDetails.surname}</p>
            <p>Tel: ${userDetails.tel}</p>
            <p>Email: ${userDetails.email}</p>         
        `;
    }

    function updateProgressBar() {
        // Assuming a total of 19 steps (0-indexed means we go up to step 18)
        let totalSteps = 19;
        let progressPercentage = ((step + 1) / totalSteps) * 100; // Increment step by 1 to include the current step
        let modalWidth = document.querySelector('.modal-content').offsetWidth;
        let progressBar = document.getElementById("progressBar");
    
        // Calculate the maximum width for the progress bar based on the modal width
        let maxWidth = modalWidth + 20; // Add some padding
    
        // Ensure the progress percentage doesn't exceed 100%
        progressPercentage = Math.min(progressPercentage, 100);
    
        // Set the width of the progress bar
        progressBar.style.width = (progressPercentage * maxWidth) / 100 + "px";
    }
    
    

    
});

document.getElementById('startBtn').addEventListener('click', function() {
    // Show modal
    document.getElementById('myModel').style.visibility = 'visible' ;

    // Hide the start button
    this.style.display = 'none';

    // Find all elements with the 'hide-initially' class and make them visible
    document.querySelectorAll('.hide-initially').forEach(function(element) {
        element.style.display = 'flex'; // Adjust as necessary based on your layout
    });
});





