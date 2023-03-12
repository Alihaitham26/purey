const createRoot = require('../js/createRoot');

describe('createRoot', () => {
  it('should return object have a render function', () => {
    const root = createRoot(document.createElement('div'));
    expect(typeof root.render).toBe('function');
  })
})
