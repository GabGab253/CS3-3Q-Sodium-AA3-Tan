function Conditions() {
    let message = prompt("Enter a message:");
    let result = '';

    if (message.indexOf('FR') > -1) {
        result = 'The message "' + message + '" is legitimate!';
        if (message.indexOf('AI') > -1) {
            result = 'The message "' + message + '" is legitimate!';
        } else if (message.indexOf('Ai') > -1 || message.indexOf('aI') > -1) {
            result = 'The message "' + message + '" is fake!';
        }
    } else {
        if (message.indexOf('AI') > -1 || message.indexOf('Ai') > -1 || message.indexOf('aI') > -1) {
            result = 'The message "' + message + '" is fake!';
        } else {
            result = 'The message "' + message + '" is not yet encoded!';
        }
    }

    document.getElementById('result').innerText = result;
}