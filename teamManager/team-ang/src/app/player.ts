export class Player {
    constructor(
        public pname: String = '',
        public preferred_position: String = '', 
        public games: Object = {game1: 'undecided', game2: 'undecided', game3: 'undecided'}
    ){}
}
