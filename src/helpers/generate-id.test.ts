import generateId from './generate-id';

describe('Test generateId: ', () => {
  it('should generate id sequence', () => {
    const newGen = generateId();
    expect(newGen()).toBe(1);
    expect(newGen()).toBe(2);
  })
})
