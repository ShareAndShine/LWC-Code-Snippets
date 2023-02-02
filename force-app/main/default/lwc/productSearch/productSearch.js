import { LightningElement } from 'lwc';

export default class ProductSearch extends LightningElement {


    productColumns = [
        { label: 'Product Id', fieldName: 'productId' },
        { label: 'Name', fieldName: 'productName' },
        { label: 'Quantity', fieldName: 'productQuantity', editable: true },
        { label: 'Description', fieldName: 'productDesc'},
    ];

    productData = [
        {id:'1',productId:'0X1', productName:'Dino',productQuantity:'', productDesc:'Dino Toys'},
        {id:'2',productId:'0X2', productName:'Car',productQuantity:'', productDesc:'Car Toys'},
        {id:'3',productId:'0X3', productName:'JCB',productQuantity:'', productDesc:'JCB Toys'},
        {id:'4',productId:'0X4', productName:'Teddy',productQuantity:'', productDesc:'Soft Toys'},
        {id:'5',productId:'0X5', productName:'Mickey',productQuantity:'', productDesc:'Books'},
    ];

    save(event)
    {
      const productsData = this.productData.map((record) => 
      {
         const IsModifiedRowFound = event.detail.draftValues.find((value) => value.productId === record.productId);
         const flag = (IsModifiedRowFound !== undefined) ?  {'modified': 'true'} : {'modified': 'false'};
         const allRecordsWithStatusFlag = {...record, ...IsModifiedRowFound, ...flag};
         return allRecordsWithStatusFlag;
         
      });

      console.log('productsData::' + JSON.stringify(productsData));

     
      const modifiedRows = productsData.filter(function(record) {
        return record.modified === 'true';
      });

      console.log('modifiedRows::' + JSON.stringify(modifiedRows));
    }    
    
}