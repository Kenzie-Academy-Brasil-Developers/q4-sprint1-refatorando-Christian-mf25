import { describe, expect, it } from '@jest/globals';
import companySchema from '../../shapes/companySchema.shape';
import { createValidCompany, createInvalidCompany } from '../companyToTest';

describe('companySchema shape Tests', () => {
  const mockValidCompany = createValidCompany;
  const mockInvalidCompany = createInvalidCompany;

  it('Create valid company', async () => {
    const validMock = await companySchema.validate(mockValidCompany);

    expect(validMock).toBe(mockValidCompany);
  });

  it('Create invalid company ', async () => {
    try {
      await companySchema.validate(mockInvalidCompany);
    } catch (e) {
      const expectedMessage = 'cnpj precisa ter 14 dígitos';
      expect(expectedMessage).toBe(e.errors[0]);
    }
  });
});
