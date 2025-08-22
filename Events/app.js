function readMore() {
    let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur officia quo laborum nobis
    incidunt non.Adipisci nemo sequi iure ? Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
    document.getElementById('para').innerHTML = text;
}

const extraContent = document.getElementById('extraContent');
const readMoreLink = document.getElementById('readMore');

readMoreLink.onclick = function () {
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'inline';
        readMoreLink.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        readMoreLink.textContent = 'Read More';
    }
};

function vanish() {
    document.getElementById('danger').classList.add('hidden');
}
