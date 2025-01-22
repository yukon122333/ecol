const trashItems = ['Бумага', 'Пластик', 'Стекло'];
const correctBins = {
    'Бумага': 'trash-bin-paper',
    'Пластик': 'trash-bin-plastic',
    'Стекло': 'trash-bin-glass'
};

let score = 0;

function createTrashItem() {
    const item = document.createElement('div');
    const randomIndex = Math.floor(Math.random() * trashItems.length);
    
    item.className = 'trash-item';
    item.innerText = trashItems[randomIndex];
    
    item.draggable = true;

    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.innerText);
        setTimeout(() => {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', () => {
        item.style.display = 'block';
    });

    document.getElementById('trash-items').appendChild(item);
}

function setupBins() {
    const bins = document.querySelectorAll('.bin');

    bins.forEach(bin => {
        bin.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        bin.addEventListener('drop', (e) => {
            e.preventDefault();
            const droppedItem = e.dataTransfer.getData('text/plain');
            
            if (correctBins[droppedItem] === bin.id) {
                score++;
                document.getElementById('score-board').innerText = Очки: ${score};
                e.target.appendChild(document.querySelector(.trash-item));
                createTrashItem();
            } else {
                alert('Неправильно! Попробуйте еще раз.');
            }
        });
    });
}

document.getElementById('reset-game').addEventListener('click', () => {
    score = 0;
    document.getElementById('score-board').innerText = Очки: ${score};
    document.getElementById('trash-items').innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        createTrashItem();
    }
});

setupBins();
createTrashItem();
