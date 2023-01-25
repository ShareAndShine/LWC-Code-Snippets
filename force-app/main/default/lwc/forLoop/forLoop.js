import { LightningElement } from 'lwc';

export default class ForLoop extends LightningElement {

    // use curly braces to access JS property in HTML
   /* userProfile = {
        Id:1,
        profileImage : 'https://randomuser.me/api/portraits/lego/1.jpg',
        company : 'Salesforce',
        uname : 'John Doe',
        skillSet : 'Architect'
    };*/
    

    userArray = [    
        { Id:'1',uname: 'John Doe',company: 'Salesforce',profileImage: 'https://randomuser.me/api/portraits/med/men/1.jpg', skillSet : 'Architect'}, 
        { Id:'2',uname: 'John Wick',company: 'Google',profileImage: 'https://randomuser.me/api/portraits/med/men/10.jpg',skillSet : 'Developer'},
        { Id:'3',uname: 'Kate',company: 'Adobe',profileImage: 'https://randomuser.me/api/portraits/med/women/1.jpg',skillSet : 'Sr. Architect'},
        { Id:'4',uname: 'Messi',company: 'Microsoft',profileImage: 'https://randomuser.me/api/portraits/med/men/11.jpg',skillSet : 'Admin'},
        { Id:'5',uname: 'Angelina',company: 'Mailchimp',profileImage: 'https://randomuser.me/api/portraits/med/women/13.jpg',skillSet : 'Tester'},
    ];
   
    

}