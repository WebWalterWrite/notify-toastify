import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add( faEnvelope, faLock, faUser, faGithub);


const icons = {
    user: icon({prefix: 'fas', iconName: 'user'}),
    envelope: icon({prefix: 'fas', iconName: 'envelope'}),
    secret: icon({prefix: 'fas', iconName: 'lock'}),
    github: icon({prefix: 'fab', iconName: 'github'})
};

export default icons;