// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('inputField');

    // Load the input value when the page loads
    loadInput();

    // Save the input value whenever it changes
    inputField.addEventListener('input', () => {
        localStorage.setItem('savedInput', inputField.value);
    });
});

function loadInput() {
    const savedInput = localStorage.getItem('savedInput');
    if (savedInput) {
        document.getElementById('inputField').value = savedInput;
    }
}

/*----------------------checkbox---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        // Load the checkbox state when the page loads
        loadCheckboxState(checkbox);

        // Save the checkbox state whenever it changes
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});

function loadCheckboxState(checkbox) {
    const savedState = localStorage.getItem(checkbox.id);
    if (savedState !== null) {
        checkbox.checked = (savedState === 'true');
    }
}
/*----------------------selectdropdownstateNOP---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('mySelect');

    // Load the selected option when the page loads
    loadSelectState();

    // Save the selected option whenever it changes
    selectElement.addEventListener('change', () => {
        localStorage.setItem('selectedOption', selectElement.value);
    });
});

function loadSelectState() {
    const savedOption = localStorage.getItem('selectedOption');
    if (savedOption !== null) {
        document.getElementById('mySelect').value = savedOption;
    }
}
/*----------------------selectAM---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', (event) => {
    const selectElements = document.querySelectorAll('select.decorated');

    selectElements.forEach(selectElement => {
        // Load the selected option when the page loads
        loadSelectState(selectElement);

        // Save the selected option whenever it changes
        selectElement.addEventListener('change', () => {
            localStorage.setItem(selectElement.id, selectElement.value);
        });
    });
});

function loadSelectState(selectElement) {
    const savedOption = localStorage.getItem(selectElement.id);
    if (savedOption !== null) {
        selectElement.value = savedOption;
    }
}
/*----------------------sidebar---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', (event) => {
    const sidebarContainer = document.getElementById('sidebarContainer');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        sidebarContainer.classList.toggle('hidden');
    });
});

/**------------------------------------------------------------------------------------------ */
document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('bodycontain');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '303px'; // Move sidebar back
    } else {
        sidebar.style.left = '0px'; // Move sidebar to the original position
    }
});