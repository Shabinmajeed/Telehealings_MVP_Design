/**
 * ============================================================================
 * USER PROFILE SCRIPT
 * ============================================================================
 * This script handles interactions on the user profile completion page.
 * - Enables editing of the full name field.
 * - Manages the active state of the gender toggle.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Full Name Edit Functionality ---
    const fullNameInput = document.getElementById('fullNameInput');
    const editNameBtn = document.getElementById('editNameBtn');

    if (editNameBtn && fullNameInput) {
        editNameBtn.addEventListener('click', () => {
            // Remove the readonly attribute to make the field editable
            fullNameInput.readOnly = false;
            // Focus the input and place the cursor at the end of the text
            fullNameInput.focus();
            fullNameInput.setSelectionRange(fullNameInput.value.length, fullNameInput.value.length);
        });
    }

    // --- Gender Toggle Functionality ---
    const genderToggle = document.getElementById('genderToggle');
    genderToggle?.addEventListener('click', (event) => {
        const clickedOption = event.target.closest('.gender-option');
        if (!clickedOption) return;
        genderToggle.querySelector('.active')?.classList.remove('active');
        clickedOption.classList.add('active');
    });
});