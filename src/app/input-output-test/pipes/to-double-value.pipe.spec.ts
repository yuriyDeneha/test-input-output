import { ToDoubleValuePipe } from './to-double-value.pipe';

describe('ToDoubleValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ToDoubleValuePipe();
    expect(pipe).toBeTruthy();
  });
});
