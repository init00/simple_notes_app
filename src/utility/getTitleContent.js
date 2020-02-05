export default function() {
    let noteTitle = document.getElementById("form-title").value
    let noteContent = document.getElementById("form-text").value
    return {
        title: noteTitle,
        content: noteContent
    }
}