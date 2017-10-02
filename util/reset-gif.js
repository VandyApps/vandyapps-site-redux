export default function resetGif(img) {
    img.style.opacity = 0;    
    setTimeout(() => {
        let imageUrl = img.src;
        img.src = '#';
        img.src = imageUrl;
        img.style.opacity = 1;
    }, 50);
};