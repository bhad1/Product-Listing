import {Component, OnInit, Input, OnChanges} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-product-listing',
  templateUrl: 'product-listing.component.html',
  styleUrls: ['product-listing.component.css']
})
export class ProductListingComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;
  data;

  constructor() {
    this.data= [
          {
            'id': '1',
            'image': '../../assets/plp-pictures/couch.jpg',
            'name': 'Suede Couch',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$342.99'
          },
          {
            'id': '2',
            'image': '../../assets/plp-pictures/window.jpg',
            'name': 'White Hardwood Frames',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$234.99'
          },
          {
            'id': '3',
            'image': '../../assets/plp-pictures/bedImage.jpg',
            'name': 'Master Bedroom Set',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$583.99'
          },
          {
            'id': '4',
            'image': '../../assets/plp-pictures/dresser.jpg',
            'name': 'Pink Oak Dresser',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$897.99'
          },
          {
            'id': '5',
            'image': '../../assets/plp-pictures/barStools.jpg',
            'name': 'Bar stools',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$249.99'
          },
          {
            'id': '6',
            'image': '../../assets/plp-pictures/loveSeat.jpg',
            'name': 'Love Seat',
            'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
            'price': '$13.32'
          },{
          'id': '7',
          'image': '../../assets/plp-pictures/trashCan.jpg',
          'name': 'Platinum Trash Can',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$43.55'
        },{
          'id': '8',
          'image': '../../assets/plp-pictures/fridge.jpg',
          'name': 'Stainless Steel Fridge',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$1373.99'
        },{
          'id': '9',
          'image': '../../assets/plp-pictures/plates.jpg',
          'name': 'Multi-Colored Plates',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$24.99'
        },{
          'id': '10',
          'image': '../../assets/plp-pictures/lawnChair.jpg',
          'name': 'Wooden Lawn Chair',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$160.44'
        },{
          'id': '11',
          'image': '../../assets/plp-pictures/porchSwing.jpg',
          'name': 'Wooden Porch Swing',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$89.99'
        },{
          'id': '12',
          'image': '../../assets/plp-pictures/rockingChair.jpg',
          'name': 'Rocking Chair',
          'description': 'This is a specialized product at a special price just for the holidays. We always take great care with each of our products.',
          'price': '$99.99'
        }
    ];
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if(this.showProjectNumber === 1){
      this.showProject = true;
    }else {
      this.showProject = false;
    }
    console.log('child-project-num: ' + this.showProjectNumber);
    console.log('child-project-true: ' + this.showProject);
  }

}
