import { authenticate } from './auth';

describe('battle', () => {
  it('shoud authenticate successfuly when name and password exist', () => {
    expect(authenticate('florent', 'training')).toBe(true);
  });
  it("should fail authentication when name doesn't exist", () => {
    expect(authenticate('notExist', 'training')).toBe(false);
  });
  it('should fail authentication when name exist but password is wrong', () => {
    expect(authenticate('florent', 'badPassword')).toBe(false);
  });
});
