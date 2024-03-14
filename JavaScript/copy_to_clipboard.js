const icons = document.querySelectorAll('.icon .icon-general');
const icons_information = [
    "buihuynhngocanh2020@gmail.com",
    "https://github.com/ngocanh0202",
    "0888458039",
    "Da Nang",
    "https://www.linkedin.com/in/anh-bui-286815285/"
]

function copyToClipboard() {
    icons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            const text = icons_information[index];

            var tempInput = document.createElement("input");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            //display copy to clipboard message
            const message = document.createElement('div');
            message.classList.add('message');
            message.classList.add('message-display');
            message.textContent = 'Copied to clipboard';
            icon.appendChild(message);
            setTimeout(() => {
                message.classList.add('message-hidden');
                setTimeout(() => {
                    message.remove();
                }, 1000);
            }, 1000);
        });
    });
}


export default copyToClipboard;