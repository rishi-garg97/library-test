import {Component, OnInit} from '@angular/core';
import errorMessageSchema from '../assets/errorMessageSchema.json';
import modelSchema from '../assets/modelSchema.json';
import {HttpClient} from '@angular/common/http';
import _ from 'lodash';
// import uiSchema from '../assets/uiSchema.json'; // for Normal Form
import uiSchema from '../assets/uiSchemaGroup.json';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';

import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'library-test';
  modelSchema;
  uiSchema;
  errorSchema;
  profileForm: FormGroup;
  registrations;
  submitType = 'create';
  updateUserID;


  constructor(private http: HttpClient, private fb: FormBuilder, private apollo: Apollo) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {
    this.errorSchema = errorMessageSchema;
    this.modelSchema = modelSchema;
    this.uiSchema = uiSchema;
    this.displayRegistrations();

    // this.server();
  }

  createUser = () => {
    const saveRegistration = gql`
        mutation createRegistration(
          $firstName: String!
          $lastName: String!
        ) {
          createRegistration(
            firstName: $firstName
            lastName: $lastName
          ) {
            id
          }
        }
      `;
    this.apollo
      .mutate({
        mutation: saveRegistration,
        variables: {
          firstName: this.profileForm.controls['firstName'].value,
          lastName: this.profileForm.controls['lastName'].value
        }
      })
      .subscribe(
        ({ data }) => {
          this.profileForm.reset();
          console.log('User created Successfully', data);
          this.displayRegistrations();
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );
  }

  displayRegistrations() {
    const getRegistrations = gql`
      {
        Registrations{
          id
          firstName
          lastName
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: getRegistrations,
        fetchPolicy: 'network-only'
      })
      .valueChanges.map((result: any) => result.data.Registrations)
      .subscribe(data => {
        this.registrations = data;
      });
  }


  deleteUser = (id1) => {
    console.log(id1);
    const deleteRegistration = gql`
      mutation deleteRegistration($id: ID!) {
        deleteRegistration(id: $id) {
          id
        }
      }
    `;
    this.apollo
      .mutate({
        mutation: deleteRegistration,
        variables: {
          id: id1
        }
      })
      .subscribe(
        ({ data }) => {
          console.log('got editdata', data);
          this.displayRegistrations();
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );

  }

  editUser = (user) => {
    // console.log(id);
    this.updateUserID = user.id;
    this.submitType = 'update';
    this.profileForm.controls['firstName'].setValue(user.firstName);
    this.profileForm.controls['lastName'].setValue(user.lastName);
  }

  updateUser = () => {

    const updateRegistration = gql`
        mutation updateRegistration(
          $id: ID!
          $firstName: String!
          $lastName: String!
        ) {
          updateRegistration(
            id: $id
            firstName: $firstName
            lastName: $lastName
          ) {
            id
          }
        }
      `;
    this.apollo
      .mutate({
        mutation: updateRegistration,
        variables: {
          id: this.updateUserID,
          firstName: this.profileForm.controls['firstName'].value,
          lastName: this.profileForm.controls['lastName'].value
        }
      })
      .subscribe(
        ({ data }) => {
          console.log('got editdata', data);
          this.displayRegistrations();
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );
    this.submitType = 'create';
    this.profileForm.reset();
  }
  formStateChange = (change) => {
    const formData = _.find(change, (val, key) => {
      return key === 'formValue';
    });
    console.log('Form Detail' , change);
    console.log('Form Values', formData);
  }
}
