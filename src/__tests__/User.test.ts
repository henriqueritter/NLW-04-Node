import request from 'supertest';
import {app} from '../app';

describe('Users', ()=>{
  request(app).post("/user")
  .send({
    email: 'user@example.com',
    name:'User Example'
  })
})