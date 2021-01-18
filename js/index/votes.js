var voteBodyClass = 'votes__card--body';
var voteFooterClass = 'votes__card--footer';
var storageKey = 'votes';
var voteTypeUp = 'up';
var voteTypeDown = 'down';
var voteType = '';

function loadVotesCards() {
    manageLocalStorage();
    var json = getJsonData();
    var votesContainer = document.getElementById('votes-container');
    if (votesContainer && json) {
        json.forEach(data => {
            addVoteCard(votesContainer, data);
            updateVotesInfo(data.id);
        });
    }
}

function manageLocalStorage() {
    var votes = getItem(storageKey);
    if (!votes) {
        setItem(storageKey, {});
    }
}

function setItem(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
    var value = window.localStorage.getItem(key) || '{}';
    return JSON.parse(value);
}

function getVotesById(id) {
    var votes = getItem(storageKey);
    if (!votes[id]) {
        votes[id] = {
            up: 0, down: 0
        }
        setItem(storageKey, votes);
    }
    return getItem(storageKey)[id];
}

function addVote(id) {
    var votes = getItem(storageKey);
    var votesById = getVotesById(id);
    votesById.up = parseInt(votesById.up) + 1;
    votes[id] = votesById;
    setItem(storageKey, votes);
}

function downVote(id) {
    var votes = getItem(storageKey);
    var votesById = getVotesById(id);
    votesById.down = parseInt(votesById.down) + 1;
    votes[id] = votesById;
    setItem(storageKey, votes);
}

function updateVotesInfo(id) {
    var card = document.getElementById(`votes__card-${id}`);
    if (card) {
        var votesById = getVotesById(id);
        var result = card.querySelector('.votes__card--result');
        result.style.visibility = votesById.up === 0 && votesById.down === 0 ? 'hidden' : 'visible';
        var votesUp = parseInt(votesById.up), votesDown = parseInt(votesById.down);
        var totalVotes = votesUp + votesDown;
        var percUp = parseInt((votesUp * 100) / totalVotes), percDown = parseInt((votesDown * 100) / totalVotes);
        percUp = isNaN(percUp) ? 0 : percUp;
        percDown = isNaN(percDown) ? 0 : percDown;
        var thumbsUp = card.querySelector(`.${voteFooterClass}--thumbs-up`);
        var spanUp = thumbsUp.querySelector('span');
        var thumbsDown = card.querySelector(`.${voteFooterClass}--thumbs-down`);
        var spanDown = thumbsDown.querySelector('span');
        var icn = result.querySelector('i');

        spanUp.innerHTML = `${percUp}%`;
        spanDown.innerHTML = `${percDown}%`;

        thumbsUp.style.width = `${percUp}%`;
        thumbsDown.style.width = `${percDown}%`;

        if (percUp > percDown) {
            result.classList.remove('thumbs-down');
            result.classList.add('thumbs-up');
            icn.classList.remove('fa-thumbs-down');
            icn.classList.add('fa-thumbs-up');
        } else if (percUp < percDown) {
            result.classList.add('thumbs-down');
            result.classList.remove('thumbs-up');
            icn.classList.add('fa-thumbs-down');
            icn.classList.remove('fa-thumbs-up');
        } else {
            result.style.visibility = 'hidden';
        }
    }
}

function addVoteCard(container, data) {
    container.appendChild(getHtmlCard(data));
}

function getHtmlCard(data) {
    var card = document.createElement('div');
    card.setAttribute('class', 'votes__card');
    card.setAttribute('id', `votes__card-${data.id}`);
    card.style.backgroundImage = `url(${data.imageUrl})`;
    var voteResult = getHtmlVoteResult(data);
    var body = getHtmlVoteBody(data);
    var footer = getHtmVoteFooter(data);
    card.appendChild(voteResult);
    card.appendChild(body);
    card.appendChild(footer);
    return card;
}

function getHtmlVoteResult(data) {
    var result = document.createElement('div');
    result.setAttribute('class', 'thumbs votes__card--result');
    result.classList.add('thumbs-up');
    var icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-thumbs-up');
    result.appendChild(icon);
    return result;
}

function getHtmlVoteBody(data) {
    var body = document.createElement('div');
    body.setAttribute('class', voteBodyClass);

    var title = document.createElement('h1');
    title.setAttribute('class', `${voteBodyClass}--title`);
    title.innerHTML = data.name;

    var dateCategory = document.createElement('p');
    dateCategory.setAttribute('class', `${voteBodyClass}--date-category`);
    dateCategory.innerHTML = `<b>${data.date}</b> in ${data.category}`;

    var description = document.createElement('p');
    description.setAttribute('class', `${voteBodyClass}--description`);
    description.setAttribute('id', `vote-description-${data.id}`);
    description.innerHTML = data.description;

    var buttons = getHtmlVoteButtons(data);

    body.appendChild(title);
    body.appendChild(dateCategory);
    body.appendChild(description);
    body.appendChild(buttons);
    return body;
}

function getHtmlVoteButtons(data) {
    var container = document.createElement('div');
    container.setAttribute('class', `${voteBodyClass}--buttons`);

    var thumbsUpBtn = getThumbsButton(voteTypeUp);
    var thumbsDownBtn = getThumbsButton(voteTypeDown);

    thumbsUpBtn.addEventListener('click', () => {
        voteType = voteTypeUp;
        thumbsUpBtn.classList.toggle('thumbs-selected');
        thumbsDownBtn.classList.remove('thumbs-selected');
    });

    thumbsDownBtn.addEventListener('click', () => {
        voteType = voteTypeDown;
        thumbsDownBtn.classList.toggle('thumbs-selected');
        thumbsUpBtn.classList.remove('thumbs-selected');
    });

    var voteNowBtn = document.createElement('button');
    voteNowBtn.setAttribute('class', `${voteBodyClass}--buttons--vote-now`);
    voteNowBtn.innerHTML = 'Vote now';

    var voteAgainBtn = document.createElement('button');
    voteAgainBtn.setAttribute('class', `${voteBodyClass}--buttons--vote-again hidden`);
    voteAgainBtn.innerHTML = 'Vote again';

    voteNowBtn.addEventListener('click', () => {
        voteNow(data, thumbsUpBtn, thumbsDownBtn, voteNowBtn, voteAgainBtn);
    });

    voteAgainBtn.addEventListener('click', () => {
        voteAgain(data, thumbsUpBtn, thumbsDownBtn, voteNowBtn, voteAgainBtn);
    });

    container.appendChild(thumbsUpBtn);
    container.appendChild(thumbsDownBtn);
    container.appendChild(voteNowBtn);
    container.appendChild(voteAgainBtn);
    return container;
}

function voteTypeIsValid(voteType) {
    return voteType === voteTypeUp || voteType === voteTypeDown;
}

function voteNow(data, thumbsUpBtn, thumbsDownBtn, voteNowBtn, voteAgainBtn) {
    if (voteTypeIsValid(voteType)) {
        switch (voteType) {
            case voteTypeUp:
                addVote(data.id);
                break;
            case voteTypeDown:
                downVote(data.id);
                break;
        }
        updateVotesInfo(data.id);
        thumbsUpBtn.classList.remove('thumbs-selected');
        thumbsDownBtn.classList.remove('thumbs-selected');

        thumbsUpBtn.style.display = 'none';
        thumbsDownBtn.style.display = 'none';
        voteNowBtn.style.display = 'none';
        voteAgainBtn.classList.remove('hidden');

        updateVoteDescription(data.id, 'Thank you for voting!');
    } else {
        thumbsUpBtn.classList.add('thumbs-highlighted');
        thumbsDownBtn.classList.add('thumbs-highlighted');
        setTimeout(() => {
            thumbsUpBtn.classList.remove('thumbs-highlighted');
            thumbsDownBtn.classList.remove('thumbs-highlighted');
        }, 1000);
    }
}

function voteAgain(data, thumbsUpBtn, thumbsDownBtn, voteNowBtn, voteAgainBtn) {
    thumbsUpBtn.style.display = 'flex';
    thumbsDownBtn.style.display = 'flex';
    voteNowBtn.style.display = 'block';
    voteAgainBtn.classList.add('hidden');
    voteType = '';
    updateVoteDescription(data.id, data.description);
}

function updateVoteDescription(id, message) {
    var container = document.getElementById('votes-container');
    if (container) {
        var description = container.querySelector(`#vote-description-${id}`);
        if (description) {
            description.innerHTML = message;
        }
    }
}

function getThumbsButton(type) {
    var panel = document.createElement('div');
    panel.setAttribute('class', `thumbs thumbs-${type} ${voteBodyClass}--buttons--thumbs-${type}`);
    panel.innerHTML = `<i class="fa fa-thumbs-${type}"></i>`;
    return panel;
}

function getHtmVoteFooter(data) {
    var footer = document.createElement('div');
    footer.setAttribute('class', voteFooterClass);
    var thumbsUp = getThumbsPercentage(voteTypeUp, data);
    var thumbsDown = getThumbsPercentage(voteTypeDown, data);
    footer.appendChild(thumbsUp);
    footer.appendChild(thumbsDown);
    return footer;
}

function getThumbsPercentage(type, data) {
    var value = 50;
    var thumbs = document.createElement('div');
    thumbs.setAttribute('class', `${voteFooterClass}--thumbs-${type}`);
    thumbs.innerHTML = `
        <i class="fa fa-thumbs-${type}"></i>
        <span>${value}%</span>
    `;
    return thumbs;
}

function getJsonData() {
    return [
        {
            id: 1,
            name: 'Kanye West',
            date: '1 month ago',
            category: 'Entertainment',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            imageUrl: 'http://yilvermolinah.com/zemoga/img/Kanye.png'
        },
        {
            id: 2,
            name: 'Mark Zuckerberg',
            date: '1 month ago',
            category: 'Business',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            imageUrl: 'http://yilvermolinah.com/zemoga/img/Mark.png'
        },
        {
            id: 3,
            name: 'Cristina Fernández de Kirchner',
            date: '1 month ago',
            category: 'Politics',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            imageUrl: 'http://yilvermolinah.com/zemoga/img/Cristina.png'
        },
        {
            id: 4,
            name: 'Malala Yousafzai',
            date: '1 month ago',
            category: 'Entertainment',
            description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
            imageUrl: 'http://yilvermolinah.com/zemoga/img/Malala.png'
        }
    ];
}