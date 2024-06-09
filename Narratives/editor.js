// editor.js

document.addEventListener("DOMContentLoaded", function() {
    tinymce.init({
        selector: '#editor',
        plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        toolbar_mode: 'floating',
        height: 500,
        menubar: false,
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image',
        content_style: 'body { font-family: Arial, sans-serif; font-size: 16px; }'
    });
});
