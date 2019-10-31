import {Injectable} from '@angular/core';
import _ from 'lodash';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {GraphQLDate, GraphQLDateTime, GraphQLTime} from 'graphql-iso-date';



@Injectable({
  providedIn: 'root'
})
export class GraphQlService {

  formData;

  constructor(private apollo: Apollo) {
  }

  create = (modelSchema, formData) => {
    let args1 = '';
    let args2 = '';
    let args3 = '';
    _.each(modelSchema.properties, (m) => {
      let dataType = m.dataType;
      if (m.dataType === 'Number') {
        dataType = 'Int';
      } else if (m.dataType === 'Enumeration') {
        if (m.array) {
          dataType = '[String]';
        } else {
          dataType = 'String';
        }
      } else if (['Radio', 'Email', 'Measure', 'Password'].includes(m.dataType)) {
        dataType = 'String';
      }
      args1 += ` $${m.name}: ${dataType}`;
      args2 += ` ${m.name}: $${m.name}`;
      args3 += `${m.name} `;
    });
    args1 = args1.substr(1);
    args2 = args2.substr(1);

    const preparedQuery = gql`
        mutation create(${args1}) {
          create(${args2}) {
            ${args3}
          }
        }`;
    const value = {};
    _.each(modelSchema.properties, (property) => {
      let matchedFieldData = _.find(formData, (fieldData, formKey) => {
        const key = Object.keys(fieldData);
        return key[0] === `${property.name}Control`;
      });
      if (matchedFieldData) {
        const matchedFieldValue = Object.values(matchedFieldData[`${property.name}Control`]);
        if (matchedFieldValue.length > 1) {
          const measureValue = matchedFieldValue[0];
          const unitValue = matchedFieldValue[1];
          matchedFieldData[`${property.name}`] = measureValue[`${property.name}Measure`] + unitValue[`${property.name}Unit`];
        } else {
          matchedFieldData = matchedFieldData[`${property.name}Control`];
        }
      }
      if (matchedFieldData && matchedFieldData[property.name] !== '') {
        if (property.dataType === 'Date') {
          value[property.name] = new Date(matchedFieldData[property.name]);
        } else {
          value[property.name] = matchedFieldData[property.name];
        }
      } else {
        value[property.name] = null;
      }
    });
    console.log('Prepared Query', preparedQuery);
    console.log('value', value);
    this.apollo.mutate({
      mutation: preparedQuery,
      variables: value
    }).subscribe(
      ({data}) => {
        console.log('User created Successfully', data);
      },
      error => {
        console.log('there was an error sending the query', error);
      }
    );
  }

  getFieldName = (modelSchema) => {
    let fieldNames = '';
    _.each(modelSchema.properties, (property) => {
      fieldNames += `${property.name} `;
    });
    return fieldNames;
  }

  getData = (modelSchema) => {

    return new Observable(observer => {
      const getDetail = gql`
      {
        ${modelSchema.name}{
          id
          ${this.getFieldName(modelSchema)}
        }
      }
    `;
      this.apollo.watchQuery({query: getDetail, fetchPolicy: 'network-only'}).valueChanges.subscribe({
        next: (result: any) => {
          observer.next(result.data);
        },
        error: (error) => {
          console.log(error);
        }
      });
    });
  }

  remove = (value) => {
    const deleteUser = gql`
      mutation delete($id: ID!) {
        delete(id: $id) {
          id
        }
      }
    `;
    this.apollo
      .mutate({
        mutation: deleteUser,
        variables: {
          id: value.id
        }
      })
      .subscribe(
        ({data}) => {
          console.log('got editdata', data);
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );

  }
}
