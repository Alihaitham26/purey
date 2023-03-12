const { newElement } = require('../js/index')

describe('newElement', () => {
  it('should create a new element', () => {
    const element = newElement('div', { class: 'test' });
    expect(element.tagName).toBe('DIV');
    expect(element.className).toBe('test');
  });
  it('should create a new element with attributes', () => {
    const element = newElement('div', { class: 'test', id: 'test' });
    expect(element.tagName).toBe('DIV');
    expect(element.className).toBe('test');
    expect(element.id).toBe('test');
  });
  it('should create a new element with children', () => {
    const element = newElement('div', { class: 'test', id: 'test' }, 'test');
    expect(element.tagName).toBe('DIV');
    expect(element.className).toBe('test');
    expect(element.id).toBe('test');
    expect(element.innerHTML).toBe('test');
  });
  it('should create a new element with children that are elements', () => {
    const element = newElement('div', { class: 'test', id: 'test' }, newElement('div', { class: 'test', id: 'test' }));
    expect(element.tagName).toBe('DIV');
    expect(element.className).toBe('test');
    expect(element.id).toBe('test');
    expect(element.childNodes[0].tagName).toBe('DIV');
    expect(element.childNodes[0].className).toBe('test');
    expect(element.childNodes[0].id).toBe('test');

  })
})
