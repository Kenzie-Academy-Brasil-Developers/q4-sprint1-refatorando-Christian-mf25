import { describe, expect, test } from '@jest/globals';
import request from 'supertest';

import { createValidCompany, postUser } from '../companyToTest';
import companies from '../../config/database';
import app from '../../app';

describe('Route register Tests', () => {
  const company = createValidCompany;

  test('201 created: created company and push to database', async () => {
    const response = await request(app).post('/companies/register').send(company);

    const expectedJsonMessage = 201;
    expect(response.statusCode).toBe(expectedJsonMessage);

    const resBodyKeys = Object.keys(response.body.company).sort();
    const expectBodyKeys = Object.keys(postUser.company).sort();
    expect(resBodyKeys).toStrictEqual(expectBodyKeys);

    expect(companies.find((_) => _.cnpj === company.cnpj)).toBeTruthy();
  });
});
