// <div id="imageDiv"></div>

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
    const imageUrl = 'http://10.94.11.163/zabbix/chart.php?from=now-3h&to=now&itemids%5B0%5D={ITEM.ID}&type=0&resolve_macros=1&profileIdx=web.item.graph.filter&profileIdx2={ITEM.ID}&width=1600&height=200'; // Replace with your image URL
    loadImage(imageUrl, 'imageDiv'); // Show image in imageDiv tab
</script>
