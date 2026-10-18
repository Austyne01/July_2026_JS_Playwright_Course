//Q4. Write a function launchBrowser(browserName) exactly like the classroom example, butmake it case-insensitive and space-tolerant (so ' CHROME ' should still work). 
// It must returntrue for chrome, firefox, edge, safari and false for anything else. Call it with 'Chrome', ' firefox ','IE' and 'opera' and print all four results.

function LaunchBrowser(browserName){
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;

              case 'firefox':
            console.log('launch firefox');
            return true;
     case 'opera':
            console.log('launch opera');
            return true;

             case 'edge':
            console.log('launch edge');
            return true;
        default:
            console.log('Invalid browser');
return false;
    }
}

let browse=LaunchBrowser(' EDGe ');
console.log(browse);