<div id="imageDiv"></div>

<script>
    async function loadImage(url, divId) {
        try {
            const buffer = await fetchImageAsBuffer(url);
            const imageUrl = bufferToImageUrl(buffer);
            displayImageInDiv(imageUrl, divId);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    // Example usage
    const imageUrl = 'https://example.com/path/to/your/image.jpg'; // Replace with your image URL
    loadImage(imageUrl, 'imageDiv'); // Show image in imageDiv tab
</script>