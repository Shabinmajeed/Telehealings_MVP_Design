// Grab the elements
const phoneState = document.getElementById('phone-state');
const otpState = document.getElementById('otp-state');
const generateBtn = document.getElementById('generate-btn');
const displayTitle = document.getElementById('display-title');
const instructionText = document.getElementById('instruction-text');
const otpInputs = document.querySelectorAll('.otp-box');
const phoneInput = document.getElementById('phone');

// Function to switch from Phone to OTP
generateBtn.addEventListener('click', () => {
    generateBtn.classList.add('hidden');
    otpState.classList.remove('hidden');
    displayTitle.innerText = "Verify OTP";
    instructionText.innerText = "Enter the 6-digit code we sent to your device.";
    otpInputs[0].focus(); // Automatically focus the first box
});

// Restrict phone input to numbers only
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
}

// Logic to jump to the next OTP box automatically
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});