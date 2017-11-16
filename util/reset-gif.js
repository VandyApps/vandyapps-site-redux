export default function resetGif(img, onLoad) {
    img.style.opacity = 0;
    setTimeout(() => {
        let imageUrl = img.src;
        img.src = '#';
        img.onload = onLoad;
        img.src = imageUrl;
        img.style.opacity = 1;
    }, 50);
};