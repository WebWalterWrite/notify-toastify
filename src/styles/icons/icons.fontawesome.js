import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

library.add( faEnvelope, faLock, faUser);


const icons = {
    user: icon({prefix: "fas", iconName: "user"}),
    envelope: icon({prefix: "fas", iconName:"envelope"}),
    secret: icon({prefix: "fas", iconName: "lock"}),
};

export default icons;