import { Injectable } from '@angular/core';
import { Vote } from 'src/app/contracts/models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VotesManagerService {

  constructor() { }

  public getVotes(): Vote[] {
    return [
      {
        id: 1,
        name: 'Kanye West',
        date: '1 month ago',
        category: 'Entertainment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'http://yilvermolinah.com/zemoga/img/Kanye.png'
      },
      {
        id: 2,
        name: 'Mark Zuckerberg',
        date: '1 month ago',
        category: 'Business',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'http://yilvermolinah.com/zemoga/img/Mark.png'
      },
      {
        id: 3,
        name: 'Cristina Fernández de Kirchner',
        date: '1 month ago',
        category: 'Politics',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'http://yilvermolinah.com/zemoga/img/Cristina.png'
      },
      {
        id: 4,
        name: 'Malala Yousafzai',
        date: '1 month ago',
        category: 'Entertainment',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        message: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        imageUrl: 'http://yilvermolinah.com/zemoga/img/Malala.png'
      }
    ];
  }
}
