import { authenticate } from './auth';

describe('battle', () => {
  it('shoud authenticate successfuly when name and password exist', async () => {
    expect(await authenticate('florent', 'training')).toBe(true);
  });
  it("should fail authentication when name doesn't exist", async () => {
    expect(await authenticate('notExist', 'training')).toBe(false);
  });
  it('should fail authentication when name exist but password is wrong', async () => {
    expect(await authenticate('florent', 'badPassword')).toBe(false);
  });
});
