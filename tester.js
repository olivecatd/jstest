document.addEventListener('DOMContentLoaded', function() {
    // Create a new button element
    var button = document.createElement('button');
    
    // Set the button's text
    button.innerText = 'Click Me'; 
    
    // Add styles to the button to make it large
    button.style.fontSize = '24px';
    button.style.padding = '10px 20px';
    button.style.margin = '10px';
    
    // Add the button to the top of the body
    document.body.insertBefore(button, document.body.firstChild);
});
