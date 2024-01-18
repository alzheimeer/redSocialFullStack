import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  getUsuarios() {
    return this.apollo.watchQuery<any>({
      query: gql`
        query {
          users(includeSoftDeleted: true) {
            id
            email
            fullname
            age
            posts {
              id
              title
              content
              likes
              userId
              active
              createdAt
              updatedAt
              deletedAt
            }
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `
    }).valueChanges;
  }

  getUsuarioById(userId: string) {
    return this.apollo.watchQuery<any>({
      query: gql`
        query($id: String!) {
          userById(id: $id) {
            id
            email
            fullname
            age
            posts {
              id
              title
              content
              likes
              userId
              active
              createdAt
              updatedAt
              deletedAt
            }
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `,
      variables: { id: userId }
    }).valueChanges;
  }


  getUserByEmail(email: string) {
    return this.apollo.watchQuery<any>({
      query: gql`
        query($email: String!) {
          userByEmail(email: $email) {
            id
            email
            fullname
            age
            posts
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `,
      variables: { email: email }
    }).valueChanges;
  }

  getAllPost(limit: number, page: number) {
    return this.apollo.watchQuery<any>({
      query: gql`
        query ($limit: Float!, $page: Float) {
          Posts(limit: $limit, page: $page) {
            id
            title
            content
            likes
            userId
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `,
      variables: {
        limit,
        page
      }
    }).valueChanges;
  }

  getPostById(id: string) {
    return this.apollo.watchQuery<any>({
      query: gql`
        query($id: String!) {
          PostById(id: $id) {
            id
            title
            content
            likes
            userId
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `,
      variables: { id }
    }).valueChanges;
  }

  loginUser(email: string, password: string) {
    return this.apollo.watchQuery<any>({
      query: gql`
        query loginUser($email: String!, $password: String!) {
          loginUser(loginUserDto: { email: $email, password: $password })
        }
      `,
      variables: {
        email,
        password
      }
    }).valueChanges;
  }


  createUser(userData: {
    email: string,
    password: string,
    fullname: string,
    age: number,
  }) {
    console.log(userData);
    return this.apollo.mutate({
      mutation: gql`
        mutation registerUser($email: String!, $password: String!, $fullname: String!, $age: Float!) {
          registerUser(createUserDto: { email: $email, password: $password, fullname: $fullname, age: $age }) {
            id
            email
            fullname
            age
            active
            createdAt
            updatedAt
            deletedAt
          }
        }
      `,
      variables: {
        email: userData.email,
        password: userData.password,
        fullname: userData.fullname,
        age: userData.age,
      }
    });
  }

  updateUser(
    id?: string,
    email?: string,
    password?: string,
    fullname?: string,
    age?: number,
    active?: boolean,
  ) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateEmail($id: String!, $email: String!, $password: String!, $fullname: String!, $age: Int!, $active: Boolean!) {
          updateEmail(userId: $userId, newEmail: $newEmail, password: $password, fullname: $fullname, age: $age, active: $active) {
            id
            email
          }
        }
      `,
      variables: {
        id: id,
        email: email,
        password: password,
        fullname: fullname,
        age: age,
        active: active,
      }
    });
  }


  deleteUser(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation deleteUser($id: String!) {
          deleteUser(id: $id)
        }
      `,
      variables: {
        id: id,
      }
    });
  }



}
