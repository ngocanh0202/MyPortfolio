
const handleImageChange = () => {
    const images = document.querySelectorAll('.project-clicked img');
    if(images === null) return;
    images.forEach((image) => {
        image.addEventListener('click', () => {
            const contentImage = document.createElement('div');
            contentImage.classList.add('content-image');
            contentImage.classList.add('display');
            const img = document.createElement('img');
            img.src = image.src;
            contentImage.appendChild(img);
            document.body.appendChild(contentImage);

            removeImage();
        });
    });
}

const removeImage = () => {
    const contentImage = document.querySelectorAll('.content-image');
    if(contentImage === null) return;
    contentImage.forEach((contentImage) => {
        contentImage.addEventListener('click', () => {
            setTimeout(() => {
                contentImage.classList.remove('display');
                contentImage.classList.add('hidden');
            }, 10);
            setTimeout(() => {
                contentImage.remove();
            },300);
        });
    });
}

export default handleImageChange;