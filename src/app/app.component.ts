import {Component, OnInit} from '@angular/core';

import modelSchema from '../assets/modelSchema.json';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';

import {GraphQlService} from './graphql/graph-ql.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  submitType = 'create';
  updateUserID;
  userData;
  modelSchema;


  constructor(private apollo: Apollo, private graphQlService: GraphQlService) {
  }

  ngOnInit(): void {
    this.modelSchema = modelSchema;
    this.graphQlService.getData(modelSchema).subscribe((data) => {
      this.graphQlService.formData = data;
      this.userData = data;
    });
  }
  //
  // updateUser = () => {
  //
  //   const updateRegistration = gql`
  //       mutation updateRegistration(
  //         $id: ID!
  //         $firstName: String!
  //         $lastName: String!
  //       ) {
  //         updateRegistration(
  //           id: $id
  //           firstName: $firstName
  //           lastName: $lastName
  //         ) {
  //           id
  //         }
  //       }
  //     `;
  //   this.apollo
  //     .mutate({
  //       mutation: updateRegistration,
  //       variables: {
  //         id: this.updateUserID,
  //         firstName: this.profileForm.controls['firstName'].value,
  //         lastName: this.profileForm.controls['lastName'].value
  //       }
  //     })
  //     .subscribe(
  //       ({ data }) => {
  //         console.log('got editdata', data);
  //         this.displayRegistrations();
  //       },
  //       error => {
  //         console.log('there was an error sending the query', error);
  //       }
  //     );
  //   this.submitType = 'create';
  //   this.profileForm.reset();
  // }

  listStateChange = (change) => {
    console.log(change);
    if (change.key === 'Delete') {
      this.graphQlService.remove(change.value);
      this.graphQlService.getData(modelSchema).subscribe((data) => {
        this.graphQlService.formData = data;
        this.userData = data;
        console.log(this.userData);
      });
    }
  }
}
