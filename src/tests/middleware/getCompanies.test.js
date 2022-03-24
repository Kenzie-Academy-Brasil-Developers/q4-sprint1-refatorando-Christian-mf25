import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { verifyCompanyExistence } from '../../middlewares/company';
import { createValidCompany } from '../companyToTest';
import companies from '../../config/database';

describe('verifyCompanyExistence Middleware Tests', () => {
  const mockReq = {};
  const mockRes = {};
  const nextFn = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it('Status = 400 | Json = Company not registered', () => {
    const mockCnpj = '12345678912346';
    mockReq.params = {
      cnpj: mockCnpj,
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    const expectedStatusCode = 400;
    expect(mockRes.status).toBeCalledWith(expectedStatusCode);

    const expectedJsonMessage = { message: 'Company not registered' };
    expect(mockRes.json).toBeCalledWith(expectedJsonMessage);
  });

  it('Company registered', () => {
    const company = createValidCompany;
    companies.push(company);

    mockReq.params = {
      cnpj: company.cnpj,
    };

    verifyCompanyExistence(mockReq, mockRes, nextFn);

    expect(nextFn).toBeCalledTimes(1);
    expect(mockReq.company).toBe(company);
  });
});
