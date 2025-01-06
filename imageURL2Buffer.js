async function fetchImageAsBuffer(url) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return buffer;
}

function bufferToImageUrl(buffer) {
    const blob = new Blob([buffer], { type: 'image/jpeg' }); // Adjust the MIME type as needed
    return URL.createObjectURL(blob);
}

function displayImageInDiv(imageUrl, divId) {
    const img = document.createElement('img');
    img.src = imageUrl;
    document.getElementById(divId).appendChild(img);
}
