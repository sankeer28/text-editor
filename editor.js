
document.getElementById('editor').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.execCommand('insertHTML', false, '<div><br></div>');
        event.preventDefault();
    }
});

var easyMDE = new EasyMDE({ element: document.getElementById('editor') });
var savedContent = localStorage.getItem('savedContent');
if (savedContent) {
    easyMDE.value(savedContent);
}

easyMDE.codemirror.on('change', function() {
    localStorage.setItem('savedContent', easyMDE.value());
});

document.getElementById('font-selector').addEventListener('change', function() {
    var selectedFont = this.value;
    document.querySelector('.CodeMirror').style.fontFamily = selectedFont;
});

document.getElementById('github-button').addEventListener('click', function() {
    window.open('https://github.com/sankeer28/text-editor', '_blank');
});

var isBlueTheme = false;

document.getElementById('theme-button').addEventListener('click', function() {
    if (isBlueTheme) {
        document.body.style.background = 'linear-gradient(to right, #ff9966, #ff5e62)';
        isBlueTheme = false;
    } else {
        document.body.style.background = 'linear-gradient(to right, #000046, #1cb5e0)';
        isBlueTheme = true;
    }
});

