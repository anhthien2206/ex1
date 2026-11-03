function upDate(previewPic) {
    console.log("Sự kiện upDate đã kích hoạt!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);
    
    let imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
