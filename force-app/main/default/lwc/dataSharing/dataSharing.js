import { LightningElement } from 'lwc';

export default class DataSharing extends LightningElement {


    // Option 1: Curly braces to access JS property in HTML
    userImg = 'https://randomuser.me/api/portraits/lego/1.jpg';
    companyName = 'Salesforce';
    userName = 'John Doe';
    skillSet = 'Architect';

    // Option 2: Use JS gettter get property() {}
    get companyNameUpperCase()
    {
       // convert data to uppercase
        const companyUpperCase = this.companyName.toUpperCase();
        return companyUpperCase;
    }

    get userNameUpperCase()
    {
       // convert data to uppercase
        const userUpperCase = this.userName.toUpperCase();
        return userUpperCase;
    }



}